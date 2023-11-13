import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from "./pages/Home";
import Vehicules from "./pages/Vehicules";
import Customizer from "./pages/Customizer";
import Visite from "./pages/Visite";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'

// Routes de l'appli
const router = createBrowserRouter([
  {
    path:"/", element: <Home />
  },
  {
    path:"/vehicules", element: <Vehicules/>
  },
  {
    path:"/customizer", element: <Customizer />
  },
  {
    path:"/visite", element: <Visite />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
