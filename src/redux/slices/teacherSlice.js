import { createSlice } from "@reduxjs/toolkit";

const teacherSlice = createSlice({
  name: "teacher",
  initialState: { currentTeacher: null },
  reducers: {
    setTeacher: (state, action) => {
      state.currentTeacher = { ...action.payload };
    },
    logoutTeacher: (state) => {
      state.currentTeacher = null;
    },
  },
});

export const { setTeacher, logoutTeacher } = teacherSlice.actions;
export default teacherSlice.reducer;