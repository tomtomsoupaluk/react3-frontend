import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// development
// window.$api = 'http://localhost:3000'

// production
window.$api = 'https://jackapi1.wannabedevs.com'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
