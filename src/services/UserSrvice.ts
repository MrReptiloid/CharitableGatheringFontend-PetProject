import api from "../http"

export default class UserService{
  static async Register(userName: string, password: string){
    return api.post("/user/register", { userName, password })
  }

  static async Login(userName: string, password: string){
    return api.post("/user/login", { userName, password })
  }

  static async Verify(){
    return api.get("/user/verify")
  }
}