import api from "../http"


export default class GatheringService {
  static async GetAll() {
    return api.get("/gathering")
  }
}