import { createSlice } from "@reduxjs/toolkit";

const quizSlice = createSlice({
  name: "quizzes",
  initialState: { list: [], selectedQuiz: null },
  reducers: {
    setQuizzes: (state, action) => {
      state.list = action.payload;
    },
    addQuiz: (state, action) => {
      state.list.push(action.payload);
    },
    updateQuiz: (state, action) => {
      const idx = state.list.findIndex(q => q.id === action.payload.id);
      if (idx !== -1) state.list[idx] = action.payload;
    },
    deleteQuiz: (state, action) => {
      state.list = state.list.filter(q => q.id !== action.payload);
    },
    setSelectedQuiz: (state, action) => {
      state.selectedQuiz = action.payload;
    }
  },
});

export const { setQuizzes, addQuiz, updateQuiz, deleteQuiz, setSelectedQuiz } = quizSlice.actions;
export default quizSlice.reducer;
