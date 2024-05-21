import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import exampleService from './exampleService'

// Valores iniciales del estado
// Similar al valor por defecto del useState
const initialState = {
	myExampleKey: '',
	isError: false,
	isSuccess: false,
	isLoading: false,
	message: '',
}

// Esta es la funcion que utilizaremos en nuestros componentes
// Solo puede recibir 2 parametros
// Uno con la data (obligatorio, si no necesitas parametros se puede colocar un _)
// Y el segundo siempre es thunkAPI (revisar documentacion)
export const getPosts = createAsyncThunk(
	'example/exampleFunction',
	async (data, thunkAPI) => {
		try {
			return await exampleService.getPosts(data)
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

// Creamos el Slice y creamos "casos" para los diferentes estados de la solicitud
// Si esta pending podemos renderizar un skeleton en el componente por ejemplo
export const exampleSlice = createSlice({
	name: 'example',
	initialState,
	reducers: {
		reset: (state) => initialState,
	},
	extraReducers: (builder) => {
		builder
			.addCase(getPosts.pending, (state) => {
				state.isLoading = true
			})
			.addCase(getPosts.fulfilled, (state, action) => {
				state.isLoading = false
				state.isSuccess = true
				state.myExampleKey = action.payload
			})
			.addCase(getPosts.rejected, (state, action) => {
				state.isLoading = false
				state.isError = true
				state.message = action.payload
				state.myExampleKey = null
			})
	},
})

export const { reset } = exampleSlice.actions
export default exampleSlice.reducer
