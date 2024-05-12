import { configureStore } from '@reduxjs/toolkit'
import transferSlice from './transferSlice'
export const store = configureStore({
  reducer: {
    transfer: transferSlice
  },
})