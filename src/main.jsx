import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import '/node_modules/bootstrap/dist/css/bootstrap.min.css'
import '/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import { registerSW } from 'virtual:pwa-register'

registerSW({immediate: true})

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <BrowserRouter>
       <App />
   </BrowserRouter>
  </StrictMode>,
)
