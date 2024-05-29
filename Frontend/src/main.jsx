import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './views/App.jsx'
import './styles/index.css'
import { store } from './redux/store.js'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { Navbar } from './components/Navbar.jsx'

// Este archivo deberia ser solo de configuracion
// Routers, providers y demas
ReactDOM.createRoot(document.getElementById('root')).render(
	<Provider store={store}>
		<BrowserRouter>
			<Navbar />

			{/* Las rutas estan definidas en App.jsx */}
			<App />
		</BrowserRouter>
	</Provider>
)
