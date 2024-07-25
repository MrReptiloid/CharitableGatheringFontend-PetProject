import api from "../http"
import {Gathering} from "../models/Gathering.ts";


export default class GatheringService {
  static async GetAll() {
    return api.get("/gathering")
  }

  static async Create(gathering: Gathering) {
    return api.post("/gathering", gathering)
  }

  static async Update(gathering: Gathering){
    return api.put(`/gathering/${gathering.id}`, gathering )
  }

  static async Delete(id: string){
    return api.delete(`/gathering/${id}`)
  }
}