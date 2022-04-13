import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { authService } from './post-service'

export const createPost = createAsyncThunk(
  'post/create',
  async (postData, thunk) => {
    const token = thunk.getState().auth.user.token
    console.log(token)
    const data = await authService.createPost(postData, token)

    if (data.status === ('fail' || 'error')) {
      return thunk.rejectWithValue(data.message)
    }

    return thunk.fulfillWithValue(data)
  }
)

const initialState = {
  message: '',
  post: {},
  posts: [],
  loading: true,
  isSuccess: false,
  isError: false
}

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    reset: function (state) {
      state.loading = true
      state.isError = false
      state.isSuccess = false
      state.message = ''
      state.post = {}
      state.posts = []
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(createPost.pending, (state) => {
        state.loading = true
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.loading = false
        state.isError = false
        state.isSuccess = true
        state.post = action.payload
        state.posts = []
        state.message = ''
      })
      .addCase(createPost.rejected, (state, action) => {
        state.loading = false
        state.isError = true
        state.isSuccess = false
        state.message = action.payload
        state.post = {}
        state.posts = []
      })
  }
})

export const { reset } = postSlice.actions
export default postSlice.reducer
