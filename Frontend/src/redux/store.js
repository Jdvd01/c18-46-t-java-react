import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './reducers/example_counter/counterSlice'
import exampleReducer from './reducers/example/exampleSlice'

export const store = configureStore({
	reducer: {
		counter: counterReducer,
		example: exampleReducer,
	},
})
