import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './app.css'
import { RouterProvider } from 'react-router-dom'
import router from './routers/router.jsx'
import AuthProvider from './context/AuthContext/AuthProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <AuthProvider>
      <RouterProvider router = {router}/>
    </AuthProvider>
  </StrictMode>,
)
