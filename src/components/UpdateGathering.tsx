import {
  Box,
  Button, Card,
  CardActions,
  CardContent,
  Divider,
  Modal,
  Stack,
  Switch,
  TextField,
  Typography
} from "@mui/material"
import {useState} from "react"
import {Gathering} from "../models/Gathering.ts";

interface Props {
  item: Gathering
  handleUpdateGathering: (gathering: Gathering) => void
}

export const UpdateGathering = ({item, handleUpdateGathering}: Props)=> {
  const [gathering, setGathering] = useState(item)

  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  const toggleChecked = () => {
    setGathering(prev => ({
      ...prev,
      isVerified: !prev.isVerified
    }))
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
    <>
      <Button
        variant={"contained"}
        sx={{flex: 1}}
        onClick={handleOpenModal}
      >
        Update
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
              <Stack spacing={3}>
                <Stack
                  direction={"row"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <Typography>Is Verified</Typography>
                  <Switch
                    checked={gathering.isVerified}
                    onChange={toggleChecked}
                  />
                </Stack>
                <TextField
                  label="Title"
                  variant="standard"
                  value={gathering.title}
                  onChange={e => setGathering(prev => ({
                    ...prev,
                    title: e.target.value
                  }))}
                />
                <TextField
                  label="Description"
                  multiline
                  rows={4}
                  variant="standard"
                  value={gathering.description}
                  onChange={e => setGathering(prev => ({
                    ...prev,
                    description: e.target.value
                  }))}
                />
                <Stack
                  direction={"row"}
                  spacing={2}
                >
                  <TextField
                    type="number"
                    label="Current"
                    variant="standard"
                    value={gathering.currentAmount}
                    onChange={e => setGathering(prev => ({
                      ...prev,
                      currentAmount: Number(e.target.value)
                    }))}
                  />
                  <TextField
                    type="number"
                    label="Total"
                    variant="standard"
                    value={gathering.targetAmount}
                    onChange={e => setGathering(prev => ({
                      ...prev,
                      targetAmount: Number(e.target.value)
                    }))}
                  />
                </Stack>
                <TextField
                  type="number"
                  label="Took Part"
                  variant="standard"
                  value={gathering.membersCount}
                  onChange={e => setGathering(prev => ({
                    ...prev,
                    membersCount: Number(e.target.value)
                  }))}
                />
              </Stack>
            </CardContent>
            <Divider/>
            <CardActions sx={{background: '#ffeeee'}}>
              <Button
                variant={"contained"}
                sx={{flex: 1}}
                onClick={() => handleUpdateGathering(gathering)}
              >
                Save
              </Button>
            </CardActions>
          </Card>
        </Box>
      </Modal>
    </>
  )
}