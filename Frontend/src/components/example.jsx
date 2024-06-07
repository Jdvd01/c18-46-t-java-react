// Pueden eliminar el archivo si es necesario
// O utilizarlo cambiando el nombre
// Tanto del archivo como del componente 😉

// Funciones de redux
// useSelector para utilizar los valores actuales del estado
// useDispatch para utilizar las funciones que actualizan los estados
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
// Funciones que vienen desde el Slice del counter
import {
	decrement,
	increment,
} from '../redux/reducers/example_counter/counterSlice'

// Funciones del reducer example
import { getPosts } from '../redux/reducers/example/exampleSlice'
import { useEffect } from 'react'

const Example = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate();

	const { value } = useSelector((state) => state.counter)
	const { myExampleKey, isLoading, isSuccess, isError } = useSelector(
		(state) => state.example
	)

	// Probando redux con una solicitud asincrona
	useEffect(() => {
		dispatch(
			getPosts({
				prueba: 'Mi data',
			})
		)
	}, [])

	// En la consola podemos ver el estado al iniciar
	// Y al actualizarlo cuando se completa la solicitud fetch
	console.log({ myExampleKey: myExampleKey })

	return (
		<div className="w-full min-h-screen flex flex-col justify-center items-center bg-white rounded-lg">
			<h1 className="text-2xl font-medium mb-5">Mi contador {value}</h1>

			<div className="inline-flex items-center rounded-md shadow-sm">
				<button
					className="text-slate-800 hover:text-blue-600 text-sm bg-white hover:bg-slate-100 border border-slate-200 rounded-l-lg font-medium px-4 py-2 inline-flex space-x-1 items-center"
					onClick={() => {
						dispatch(increment())
					}}
				>
					<span>+1</span>
				</button>
				<button
					className="text-slate-800 hover:text-blue-600 text-sm bg-white hover:bg-slate-100 border-y border-slate-200 font-medium px-4 py-2 inline-flex space-x-1 items-center"
					onClick={() => {
						dispatch(decrement())
					}}
				>
					<span>-1</span>
				</button>
			</div>
				<button className='p-4 text-body-1 rounded-lg bg-red-500 text-white mt-4 hover:bg-red-300 active:bg-red-600' onClick={() => navigate('/useAuth')}>go to useAuth example</button>
		</div>
	)
}

export default Example
