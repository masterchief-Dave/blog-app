import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const signup = createAsyncThunk(
  "auth/signup",
  async (userData, thunk) => {
    // some code
  }
);

const initialState = {
  user: {},
  users: [],
  isSuccess: false,
  isLoading: true,
  isError: true,
  message: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.isError = false;
      state.isLoading = false;
      state.isSuccess = false;
      state.message = "";
      state.user = {};
      state.users = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signup.pending, (state, action) => {
        //   some code
      })
      .addCase(signup.fulfilled, (state, action) => {
        // some code
      })
      .addCase(signup.rejected, (state, action) => {
        // some code
      });
  },
});

export const {} = authSlice.actions;
export default authSlice.reducer;
