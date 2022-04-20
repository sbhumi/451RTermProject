import { configureStore } from '@reduxjs/toolkit'
import microsoftReducer from "./microsoftData"

// Implementing Redux Store to send microsoft data across website components
export default configureStore({
  reducer: {
      userData: microsoftReducer,
  },
})