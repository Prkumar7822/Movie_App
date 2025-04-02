import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";


interface AuthState {
  token: string | null;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  token: null,
  loading: false,
  error: null,
};

export const login = createAsyncThunk(
  "auth/login",
  async (credentials: { email: string; password: string }) => {
    try {
    const response = await axios.post("http://localhost:8080/auth/login", credentials);
    //await AsyncStorage.setItem("token", response.data.token); // Store token in AsyncStorage
    console.log("Token stored in AsyncStorage:", response.data.token);
    return response.data.token;

    } catch (error) {
        throw new Error("Login failed");
    }
  }
);


const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
      logout: (state) => {
      state.token = null;
      AsyncStorage.removeItem("token");
      },
      setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
      },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload;
        AsyncStorage.setItem("token", action.payload);
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Login failed";
      });
  },
  });

  export const { logout, setToken } = authSlice.actions;
  export default authSlice.reducer;