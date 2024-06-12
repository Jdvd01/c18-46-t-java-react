import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import booksService from './bookServices.js'

// Valores iniciales del estado
const initialState = {
	books: [],
	singleBook: {},
	pagesInfo: {},
	isError: false,
	isSuccess: false,
	isLoading: false,
	message: '',
}

export const getBooksByPage = createAsyncThunk(
	'books/getBooksByPage',
	async (data, thunkAPI) => {
		try {
			return await booksService.getBooksByPage(data)
		} catch (error) {
			const message =
				(error.response &&
					error.response.data &&
					error.response.data.message) ||
				error.message ||
				error.toString()
			return thunkAPI.rejectWithValue(message)
		}
	}
)

export const getBookById = createAsyncThunk(
	'books/getBookById',
	async (data, thunkAPI) => {
		try {
			return await booksService.getBookById(data)
		} catch (error) {
			const message =
				(error.response &&
					error.response.data &&
					error.response.data.message) ||
				error.message ||
				error.toString()
			return thunkAPI.rejectWithValue(message)
		}
	}
)

export const bookSlice = createSlice({
	name: 'books',
	initialState,
	reducers: {
		reset: (state) => initialState,
	},
	extraReducers: (builder) => {
		builder
			.addCase(getBooksByPage.pending, (state) => {
				state.isLoading = true
			})
			.addCase(getBooksByPage.fulfilled, (state, action) => {
				const { content } = action.payload

				state.isLoading = false
				state.isSuccess = true
				state.books = content
				state.pagesInfo = action.payload
			})
			.addCase(getBooksByPage.rejected, (state, action) => {
				state.isLoading = false
				state.isError = true
				state.message = action.payload
				state.books = []
				state.pagesInfo = {}
			})

			.addCase(getBookById.pending, (state) => {
				state.isLoading = true
			})
			.addCase(getBookById.fulfilled, (state, action) => {
				state.isLoading = false
				state.isSuccess = true
				state.singleBook = action.payload
			})
			.addCase(getBookById.rejected, (state, action) => {
				state.isLoading = false
				state.isError = true
				state.message = action.payload
			})
	},
})

export const { reset } = bookSlice.actions
export default bookSlice.reducer
