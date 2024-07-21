import axios from "axios"

const api = axios.create({
  baseURL: `https://${import.meta.env.VITE_REACT_APP_SERVERDOMAIN}`,
})

export default api