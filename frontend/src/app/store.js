import { configureStore } from '@reduxjs/toolkit'
import authSlice from '../features/auth/auth-slice'
import postSlice from '../features/post/post-slice'

export const store = configureStore({
  reducer: {
    auth: authSlice,
    post: postSlice
  }
})
