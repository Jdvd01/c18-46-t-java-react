import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './views/App.jsx'
import './styles/index.css'
import { store } from './redux/store.js'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { Navbar } from './components/Navbar.jsx'
import { Footer } from './components/Footer.jsx'
import { ExpandLessSVG } from './assets/svg/ExpandLessSVG.jsx'

// Este archivo deberia ser solo de configuracion
// Routers, providers y demas
ReactDOM.createRoot(document.getElementById('root')).render(
	<Provider store={store}>
		<BrowserRouter>
			<Navbar />

			{/* Las rutas estan definidas en App.jsx */}
			<div className="relative">
				<App />
				<span
					className="p-2 bg-primary-500 rounded-full w-min absolute bottom-4 right-4 desktop:bottom-10 desktop:right-16"
					onClick={() => window.scrollTo(0, 0)}
				>
					<ExpandLessSVG color="#FFFFFF" />
				</span>
			</div>
			<Footer />
		</BrowserRouter>
	</Provider>
)
