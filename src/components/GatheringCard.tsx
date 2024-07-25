import {
  Box,
  Card,
  Link,
  Alert,
  Paper,
  Stack,
  Divider,
  Typography,
  CardActions,
  CardContent,
  LinearProgress,
} from "@mui/material"
import { Gathering } from "../models/Gathering";
import { dateToString } from '../utils';

interface Props{
  item: Gathering
}

export const GatheringCard = ({item}: Props) => {

  return (
    <Paper sx={{ height: '100%' }}>
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
        </Card>
      </Box>
    </Paper>
  )
}