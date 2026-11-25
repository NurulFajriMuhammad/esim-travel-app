import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App.jsx'
import { OrderProvider } from './context/OrderContext.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <OrderProvider>
        <App />
      </OrderProvider>
    </HashRouter>
  </React.StrictMode>,
)
