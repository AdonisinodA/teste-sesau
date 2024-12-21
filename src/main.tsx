import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppRoutes from './app/routes/routes.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className='w-screen h-screen p-5 overflow-x-hidden'>
    <AppRoutes/>
    </div>
  </StrictMode>,
)
