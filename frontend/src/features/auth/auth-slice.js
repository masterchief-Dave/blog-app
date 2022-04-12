import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { authService } from "./auth-service";

export const signup = createAsyncThunk(
  "auth/signup",
  async (userData, thunk) => {
    const data = await authService.signup(userData);

    if (data.status === ("fail" || "error")) {
      return thunk.rejectWithValue(data.message);
    }

    localStorage.setItem("user", JSON.stringify(data));
    return thunk.fulfillWithValue(data);
    // return data;
  }
);

export const logout = createAsyncThunk("auth/logout", async (_, thunk) => {
  await authService.logout();
});

export const login = createAsyncThunk("auth/login", async (userData, thunk) => {
  const data = await authService.login(userData);
  console.log(data);
  if (data.status === ("fail" || "error")) {
    return thunk.rejectWithValue(data.message);
  }

  localStorage.setItem("user", JSON.stringify(data));
  return thunk.fulfillWithValue(data);

  //   return data;
});

const initialState = {
  user: {},
  users: [],
  isSuccess: false,
  loading: true,
  isError: true,
  message: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.isError = false;
      state.loading = false;
      state.isSuccess = false;
      state.message = "";
      state.user = {};
      state.users = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signup.pending, (state) => {
        state.loading = true;
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.loading = false;
        state.isError = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(signup.rejected, (state, action) => {
        state.loading = false;
        state.isError = true;
        state.isSuccess = true;
        state.user = "";
        state.message = action.payload;
      })
      .addCase(login.pending, (state) => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.isError = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.isError = true;
        state.message = action.payload;
        state.isSuccess = false;
      });
  },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
