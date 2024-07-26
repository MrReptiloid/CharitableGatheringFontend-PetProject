import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Modal,
  Stack,
  Switch,
  TextField,
  Typography
} from "@mui/material"
import {Gathering} from "../models/Gathering"
import {useState} from "react"
import AddIcon from '@mui/icons-material/Add';

interface Props {
  handleCreateGathering: (gathering: Gathering) => void
}

export const CreateGathering = ({handleCreateGathering}: Props) => {
  const [gathering, setGathering] = useState({} as Gathering)

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
      <Box
        onClick={handleOpenModal}
        sx={{ height: '100%', minHeight: '300px', bgcolor: 'ffeeee' }}
      >
        <Card variant={"outlined"} sx={{height: '100%'}}>
          <CardContent sx={{ background: '#e0e0ff', height:'100%' }}>
            <AddIcon color={"primary"} sx={{ width:'100%', height:'100%' }}/>
          </CardContent>
        </Card>
      </Box>
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
                onClick={() => handleCreateGathering(gathering)}
              >
                Add
              </Button>
            </CardActions>
          </Card>
        </Box>
      </Modal>
    </>
  )
}