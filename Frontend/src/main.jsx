import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './views/App.jsx'
import './styles/index.css'

// Este archivo deberia ser solo de configuracion
// Routers, providers y demas
ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
)
