import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { submitQuizAPI, getStudentSubmissionsAPI } from "../../service/allApi";

export const submitQuiz = createAsyncThunk("submissions/submit", async (payload) => {
  const res = await submitQuizAPI(payload);
  return res.data;
});

export const fetchStudentSubmissions = createAsyncThunk("submissions/fetchStudent", async (studentID) => {
  const res = await getStudentSubmissionsAPI(studentID);
  return res.data || [];
});

const submissionsSlice = createSlice({
  name: "submissions",
  initialState: { list: [], status: "idle" },
  extraReducers: (builder) => {
    builder
      .addCase(submitQuiz.fulfilled, (s, a) => { s.list.push(a.payload); })
      .addCase(fetchStudentSubmissions.fulfilled, (s, a) => { s.list = a.payload; });
  }
});

export default submissionsSlice.reducer;
