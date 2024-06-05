import Example from '../components/example'
import { Routes, Route } from 'react-router-dom'

// Views
import { ErrorPage } from './404.jsx'
import { AuthView } from './AuthView.jsx'
import { ExampleAuth } from '../components/ExampleAuth.jsx'

function App() {
	return (
		// Delimitaciones del grid 👇🏽
		<div className="px-4 tablet:px-8 desktop:px-40 bg-background">
			<Routes>
				<Route path="/" element={<Example />} />
				<Route path="/auth" element={<AuthView />} />
				<Route path="/useAuth" element={<ExampleAuth />} />
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
