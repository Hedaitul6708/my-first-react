import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './layouts/Home.jsx'
import { RouterProvider } from 'react-router'
import router from './Routes.jsx'
import UserProvider from './UserContext.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
      <RouterProvider router={router}></RouterProvider>
    </UserProvider>
  </StrictMode>,
)
