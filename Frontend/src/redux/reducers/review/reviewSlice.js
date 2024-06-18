import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import reviewService from './reviewServices.js'

// Valores iniciales del estado
const initialState = {
	reviews: [],
	isError: false,
	isSuccess: false,
	isLoading: false,
	message: '',
}

export const getReviewsByBook = createAsyncThunk(
	'reviews/getReviewsByBook',
	async (data, thunkAPI) => {
		try {
			return await reviewService.getReviewsByBook(data)
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

export const reviewSlice = createSlice({
	name: 'books',
	initialState,
	reducers: {
		reset: (state) => initialState,
	},
	extraReducers: (builder) => {
		builder
			.addCase(getReviewsByBook.pending, (state) => {
				state.isLoading = true
			})
			.addCase(getReviewsByBook.fulfilled, (state, action) => {
				state.isLoading = false
				state.isSuccess = true
				state.reviews = action.payload
			})
			.addCase(getReviewsByBook.rejected, (state, action) => {
				state.isLoading = false
				state.isError = true
				state.message = action.payload
			})
	},
})

export const { reset } = reviewSlice.actions
export default reviewSlice.reducer
