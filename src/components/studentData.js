import { createSlice } from '@reduxjs/toolkit'

// Using a Redux Slice in order to store student data and pull from it across the site
export const studentSlice = createSlice({
    name: 'studentData',
    initialState: {
      value: [],
    },
    reducers: {
      assignData: (state, action) => {
        console.log("inside student id reducer");
        console.log(action.payload);
        state.value = [action.payload];
      },
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { assignData } = studentSlice.actions
  
  export default studentSlice.reducer