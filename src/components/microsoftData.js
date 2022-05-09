import { createSlice } from '@reduxjs/toolkit'

// Using a Redux Slice in order to store microsoft data and pull from it across the site
export const microsoftSlice = createSlice({
    name: 'microsoftData',
    initialState: {
      value: [],
    },
    reducers: {
      assignData: (state, action) => {
        console.log("inside reducer");
        console.log(action.payload);
        state.value = [action.payload];
      },
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { assignData } = microsoftSlice.actions
  
  export default microsoftSlice.reducer