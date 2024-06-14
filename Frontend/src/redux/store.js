import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './reducers/example_counter/counterSlice'
import exampleReducer from './reducers/example/exampleSlice'
import authReducer from './reducers/auth/authSlice'
import bookReducer from './reducers/book/bookSlice'
import reviewReducer from './reducers/review/reviewSlice'

export const store = configureStore({
	reducer: {
		counter: counterReducer,
		example: exampleReducer,
		auth: authReducer,
		book: bookReducer,
		review: reviewReducer,
	},
})
