import {useEffect} from "react"
import UserService from "../services/UserSrvice"
import {Outlet} from "react-router-dom"

export const ProtectedRoute = () => {
  useEffect(() => {
    UserService.Verify()
  }, [])

  return (
    <Outlet/>
  )
}