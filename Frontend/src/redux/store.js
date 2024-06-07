import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './reducers/example_counter/counterSlice'
import exampleReducer from './reducers/example/exampleSlice'
import authReducer from './reducers/auth/authSlice'

export const store = configureStore({
	reducer: {
		counter: counterReducer,
		example: exampleReducer,
		auth: authReducer,
	},
})
