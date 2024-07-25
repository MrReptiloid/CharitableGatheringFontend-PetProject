import './App.css'
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom"

import Layout from "./Layout"
import { ProtectedRoute } from "./components/ProtectedRoute"
import { Home } from "./components/pages/Home.tsx";
import { DashBoard } from "./components/pages/Dashboard.tsx";
import { SignUp } from "./components/pages/SignUp.tsx"
import { SignIn } from "./components/pages/SignIn.tsx"

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home/>} />
        <Route path="signup" element={<SignUp />} />
        <Route path="signin" element={<SignIn />} />
        <Route element={<ProtectedRoute/>}>
          <Route path="admin" element={<DashBoard/>} />
        </Route>

      </Route>
    </>,
  ),
)


function App() {
  return <RouterProvider router={router} />
}

export default App
