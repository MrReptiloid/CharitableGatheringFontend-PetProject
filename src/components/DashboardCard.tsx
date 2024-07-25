import {
  Alert,
  Box,
  Card,
  CardActions,
  CardContent,
  Divider,
  LinearProgress, Link,
  Paper,
  Stack,
  Typography,
  Button
} from "@mui/material";
import {dateToString} from "../utils.ts";
import {Gathering} from "../models/Gathering.ts";

interface Props{
  item: Gathering
}

export const DashboardCard = ({item}: Props) => {
  return (
    <Paper>
      <Box sx={{ minWidth: 275 }}>
        <Card variant={"outlined"}>
          <CardContent sx={{ background: '#e0e0ff' }}>
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Typography>{dateToString(item.createdDate)}</Typography>
              {
                item.isVerified
                  ? <Alert severity="success">Verified</Alert>
                  : <Alert severity="warning">No Information</Alert>
              }
            </Stack>
            <Typography
              variant={"h5"}
            >
              {item.title}
            </Typography>
            <LinearProgress
              value={
                item.targetAmount === 0
                  ? 0
                  : item.currentAmount / item.targetAmount * 100
              }
              variant="determinate"
              sx={{ height: '10px', borderRadius: '5px'}}
            />
            <Stack
              sx={{ mt: '16px' }}
            >
              <Stack
                direction={"row"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Typography variant={"h5"}>All collected</Typography>
                <Typography variant={"h5"}>{item.currentAmount}/{item.targetAmount}</Typography>
              </Stack>
              <Stack
                direction={"row"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Typography variant={"h5"}>Took part</Typography>
                <Typography variant={"h5"}>{item.membersCount}</Typography>
              </Stack>
            </Stack>
          </CardContent>
          <Divider/>
          <CardActions>
            <Link href={`/${item.id}`} sx={{ m: 'auto' }}>
              ViewDetail
            </Link>
          </CardActions>
          <Divider/>
          <CardActions sx={{ background: '#ffeeee' }}>
            <Button variant={"contained"} sx={{ flex: 1 }}>Update</Button>
            <Button variant={"contained"} sx={{ flex: 1 }}>Delete</Button>
          </CardActions>
        </Card>
      </Box>
    </Paper>
  )
}