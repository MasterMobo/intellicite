import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import MenuProvider from './layouts/MenuProvider'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MenuProvider>
      <App />
      <ToastContainer />
    </MenuProvider>
  </React.StrictMode>,
)
