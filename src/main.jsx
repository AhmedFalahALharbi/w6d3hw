import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Screens from './pages/screens.jsx'
import Login from './pages/Login.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login></Login>
  },
  {
    path: "/screens",
    element: <Screens></Screens>
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
