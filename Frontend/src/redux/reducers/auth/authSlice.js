import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import loginService from "./loginService";
import registerService from "./registerService";

// Valores iniciales del estado
const initialState = {
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
  token: "",
  role: "",
  email: "",
};

export const logIn = createAsyncThunk("auth/login", async (data, thunkAPI) => {
  try {
    return await loginService.logIn(data);
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

export const register = createAsyncThunk(
  "auth/register",
  async (data, thunkAPI) => {
    try {
      return await registerService.register(data);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => initialState,
    partialReset: (state) => ({
      ...state,
      isError: false,
      message: "",
      isSuccess: false,
    }),
    logOut: (state) => {
      state.token = "";
      state.email = "";
      state.role = "";
      window.localStorage.removeItem("token");
      window.localStorage.removeItem("email");
      window.localStorage.removeItem("role");
    },
    setAuthDataFromLocalStorage: (state) => {
      state.token = localStorage.getItem("token") || "";
      state.email = localStorage.getItem("email") || "";
      state.role = localStorage.getItem("role") || "";
    },
  },
  extraReducers: (builder) => {
    builder
      // Login cases
      .addCase(logIn.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.token = action.payload.token;
        state.role = action.payload.role;
        state.email = action.payload.email;
        window.localStorage.setItem("token", action.payload.token);
        window.localStorage.setItem("role", action.payload.role);
        window.localStorage.setItem("email", action.payload.email);
      })
      .addCase(logIn.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      // Register cases
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.token = action.payload.token;
        state.role = action.payload.role;
        state.email = action.payload.email;
        window.localStorage.setItem("token", action.payload.token);
        window.localStorage.setItem("role", action.payload.role);
        window.localStorage.setItem("email", action.payload.email);
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset, setAuthDataFromLocalStorage, logOut, partialReset } = authSlice.actions;
export default authSlice.reducer;
