import {useEffect, useState} from "react";
import { GatheringCard } from "../GatheringCard.tsx"
import GatheringService from "../../services/GatheringService.ts"
import { Grid } from "@mui/material";

export const Home = () => {
  const [ gatherings, setGatherings ] = useState([])

  useEffect(() => {
    GatheringService.GetAll()
      .then(response => setGatherings(response.data))
  }, [])

  return (
    <>
      <Grid container spacing={2}>
        {
          gatherings.length !== 0
          ? gatherings.map((gathering: any) => (
              <Grid item xs={12} md={4} key={gathering.id} >
                <GatheringCard item={gathering} />
              </Grid>
            ))
          : <></>
        }
      </Grid>
    </>
  )
}

