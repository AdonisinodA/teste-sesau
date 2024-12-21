import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppRoutes from './app/routes/routes.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
 <AppRoutes></AppRoutes>
  </StrictMode>,
)
