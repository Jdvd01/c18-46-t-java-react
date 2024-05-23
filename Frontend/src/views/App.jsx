import Example from '../components/example'
import { Routes, Route } from 'react-router-dom';


function App() {
	return (
		<Routes>
			<Route path="/" element={<Example />} />
			{/* 
			Agregar mas rutas aqui...
				Ejemplo
				<Route path="/registro" element={<Registro />} />
			 */}
		</Routes>
	);
}

export default App
