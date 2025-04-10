import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

import Log_in from './Components/Log_in.jsx'
import Principal from './Components/Principal.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Log_in />
    <Principal />
  </StrictMode>,
)
