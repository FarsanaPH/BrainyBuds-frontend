import { createSlice } from "@reduxjs/toolkit";

const studentSlice = createSlice({
  name: "student",
  initialState: { currentStudent: null },
  reducers: {
    setStudent: (state, action) => {
      state.currentStudent = { ...action.payload };
    },
    logoutStudent: (state) => {
      state.currentStudent = null;
    },
  },
});

export const { setStudent, logoutStudent } = studentSlice.actions;
export default studentSlice.reducer;