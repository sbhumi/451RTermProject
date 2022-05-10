import { configureStore } from '@reduxjs/toolkit';
import microsoftReducer from "./microsoftData";
import studentReducer from "./studentData";

// Implementing Redux Store to send microsoft data across website components
export default configureStore({
  reducer: {
      microsoftData: microsoftReducer,
      studentData: studentReducer,
  },
});