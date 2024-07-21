import { useState } from "react";
import {
  Box,
  List,
  Drawer,
  Button,
  AppBar,
  Divider,
  Toolbar,
  ListItem,
  Typography,
  IconButton,
  CssBaseline,
  ListItemText,
  ListItemButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu"

const navElements = ['Home', 'About', 'Contact']
const drawerWidth = 240;

interface Props {
  window?: () => Window
}

export const Header = (props: Props) => {
  const { window } = props
  const [ mobileOpen, setMobileOpen ] = useState(false)
  const container = window !== undefined ? () => window().document.body : undefined;

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState)
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component={"nav"} position={"static"}>
        <Toolbar>
          <IconButton
            color={"inherit"}
            edge={"start"}
            onClick={handleDrawerToggle}
            sx={{ mr:2, display: { sm: 'none' } }}
          >
            <MenuIcon/>
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            DonateSVO
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {
              navElements.map((item) => (
                <Button key={item} sx={{ color: '#fff'}}>
                  {item}
                </Button>
              ))
            }
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant={"temporary"}
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true
          }}
          sx={{
            display: { xs: "block", sm: "none"},
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my:2 }}>
              DonateSVO
            </Typography>
            <Divider/>
            <List>
              {
                navElements.map((item) => (
                  <ListItem key={item} disablePadding>
                    <ListItemButton sx={{ textAlign: 'center' }}>
                      <ListItemText primary={item} />
                      </ListItemButton>
                  </ListItem>
                ))
              }
            </List>
          </Box>
        </Drawer>
      </nav>
    </Box>
  )
}