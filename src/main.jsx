import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"

import './index.css'
import HolaMundo from './componentes/HolaMundo.jsx'
import Calama from './componentes/Calama.jsx'

const router=createBrowserRouter([
  {
    path:"/",
    element:<App/>
  },
  {
    path:"/hola",
    element:<HolaMundo/>
  },
  {
    path:"/calama",
    element:<Calama/>

  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
