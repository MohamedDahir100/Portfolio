import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import UnderDevelopment from './components/UnderDevelopment.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UnderDevelopment />
  </StrictMode>,
)
