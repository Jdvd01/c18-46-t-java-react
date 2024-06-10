import { Routes, Route } from 'react-router-dom'

// Views
import { ErrorPage } from './404.jsx'
import { AuthView } from './AuthView.jsx'
import { Home } from './Home.jsx'
import { ExampleAuth } from '../components/ExampleAuth.jsx'
import { SingleBook } from './SingleBook.jsx'

function App() {
	return (
		<div className="bg-background">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/auth" element={<AuthView />} />
				<Route path="/useAuth" element={<ExampleAuth />} />
				<Route path="/book/:id" element={<SingleBook />} />
				{/* 
				Agregar mas rutas aqui...
					Ejemplo
					<Route path="/registro" element={<Registro />} />
				*/}
				<Route path="*" element={<ErrorPage />} />
			</Routes>
		</div>
	)
}

export default App
