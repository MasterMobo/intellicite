import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import MenuProvider from './layouts/MenuProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MenuProvider>
    <App />
    </MenuProvider>
  </React.StrictMode>,
)
