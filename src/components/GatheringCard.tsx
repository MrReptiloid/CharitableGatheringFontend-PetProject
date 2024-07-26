import {
  Box,
  Card,
  Alert,
  Paper,
  Stack,
  Divider,
  Typography,
  CardActions,
  CardContent,
  LinearProgress, Button, Modal,
} from "@mui/material"
import { Gathering } from "../models/Gathering";
import { dateToString } from '../utils';
import {useState} from "react";

interface Props{
  item: Gathering
}

export const GatheringCard = ({item}: Props) => {

  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxwidth: 400,
    width: '90%',
    bgcolor: 'background.paper',
    border: '5px solid #e0e0ff',
    boxShadow: 24,
    borderRadius: "4px"
  }

  return (
    <Paper sx={{ height: '100%' }}>
      <Box sx={{ minWidth: 275, height: '100%' }}>
        <Card variant={"outlined"} sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
          <CardContent sx={{ background: '#e0e0ff', flex: 1 }} >
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
            <Button
              variant={"contained"}
              sx={{flex: 1}}
              onClick={handleOpenModal}
            >
              View Description
            </Button>
            <Modal
              open={isModalOpen}
              onClose={handleCloseModal}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Card variant={"outlined"} sx={{borderRadius: 0, border: "none"}}>
                  <CardContent sx={{background: '#e0e0ff'}}>
                    <Typography>
                      {item.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            </Modal>
          </CardActions>
        </Card>
      </Box>
    </Paper>
  )
}