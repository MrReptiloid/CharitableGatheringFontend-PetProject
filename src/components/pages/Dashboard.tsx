import {useEffect, useState} from "react";
import GatheringService from "../../services/GatheringService.ts";
import {Grid} from "@mui/material";
import {DashboardCard} from "../DashboardCard.tsx";
import {Gathering} from "../../models/Gathering.ts";
import {CreateGathering} from "../CreateCathering.tsx"

export const DashBoard = () => {
  const [ gatherings, setGatherings ] = useState([])

  useEffect(() => {
    GatheringService.GetAll()
      .then(response => setGatherings(response.data))
  }, [])

  const deleteGathering = (id: string) => {
    GatheringService.Delete(id)
      .then(response => {
        if(response.status == 200)
          GatheringService.GetAll()
            .then(response => setGatherings(response.data))
      })
  }

  const updateGathering = (gathering: Gathering) => {
    GatheringService.Update(gathering)
      .then(response => {
        if(response.status == 200)
          GatheringService.GetAll()
            .then(response => setGatherings(response.data))
      })
  }

  const createGathering = (gathering: Gathering) => {
    GatheringService.Create (gathering)
      .then(response => {
        if(response.status == 200)
          GatheringService.GetAll()
            .then(response => setGatherings(response.data))
      })
  }

  return (
    <>
      <Grid container spacing={2}>
        {
          gatherings.length !== 0
            ? gatherings.map((gathering: any) => (
              <Grid item xs={12} md={4} key={gathering.id} >
                <DashboardCard
                  item={gathering}
                  handleDeleteGathering={deleteGathering}
                  handleUpdateGathering={updateGathering}
                />
              </Grid>
            ))
            : <></>
        }
        <Grid item xs={12} md={4}>
          <CreateGathering handleCreateGathering={createGathering} />
        </Grid>
      </Grid>
    </>
  )
}