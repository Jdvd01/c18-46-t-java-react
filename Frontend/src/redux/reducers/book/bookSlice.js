import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import booksService from './bookServices.js'

// Valores iniciales del estado
const initialState = {
	books: [],
	singleBook: {},
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
				state.isLoading = false
				state.isSuccess = true
				state.books = action.payload
			})
			.addCase(getBooksByPage.rejected, (state, action) => {
				state.isLoading = false
				state.isError = true
				state.message = action.payload
				state.books = []
			})
	},
})

export const { reset } = bookSlice.actions
export default bookSlice.reducer
