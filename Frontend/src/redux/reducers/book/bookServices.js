const BACKEND_BASE_URL = import.meta.env.VITE_BACKEND_URL

const getBooksByPage = async (data) => {
	console.log('Data desde mi book service', data)

	const response = await fetch(
		`${BACKEND_BASE_URL}/api/v1/books/allBooks?page=${data.page}&size=9`
	)
	const results = await response.json()

	return results.object
}

const bookService = {
	getBooksByPage,
}

export default bookService
