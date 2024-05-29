import Example from '../components/example'
import { Routes, Route } from 'react-router-dom'
import { ErrorPage } from './404'

function App() {
	return (
		// Delimitaciones del grid 👇🏽
		<div className="mx-8 desktop:mx-40">
			<Routes>
				<Route path="/" element={<Example />} />
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
