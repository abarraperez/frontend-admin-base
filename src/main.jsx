import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from './pages/web/layaout/Layaout.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/web/home.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, //TODO: add layout component here
    children: [
      {
        index: true,
        element: <Home />,
      },
      // for create a new route only add a new object like this:
      /*  {
        path: "team",
        element: <Home />,
      }*/

    ],
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
