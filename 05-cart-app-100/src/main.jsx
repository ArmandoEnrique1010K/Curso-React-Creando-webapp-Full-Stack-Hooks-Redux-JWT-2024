import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { CartApp } from './CartApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Instalar react-router-dom con el comando npm install react-router-dom */}
    <BrowserRouter>
      <CartApp />
    </BrowserRouter>
  </React.StrictMode>
)
