// Funciones asincronas que utilizamos desde el Slice
// Estas funciones deberian retornar la respuesta de la solicitud
// Ya transformada de JSON a JS
const getPosts = async (data) => {
	console.log('Data desde mi service', data)

	const response = await fetch('https://jsonplaceholder.typicode.com/posts')
	const results = await response.json()

	return results
}

console.log(import.meta.env.VITE_BACKEND_URL)

const exampleService = {
	getPosts,
}

export default exampleService
