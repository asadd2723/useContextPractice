import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AddCartProvider } from './Context/AddCart.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AddCartProvider>
      <App />
    </AddCartProvider>
  </React.StrictMode>,
)
