import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import normalize.css
import 'normalize.css'
import './assets/app.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
