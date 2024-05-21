import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './views/App.jsx'
import './styles/index.css'
import { store } from './redux/store.js'
import { Provider } from 'react-redux'

// Este archivo deberia ser solo de configuracion
// Routers, providers y demas
ReactDOM.createRoot(document.getElementById('root')).render(
	<Provider store={store}>
		<App />
	</Provider>
)
