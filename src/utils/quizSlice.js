import { createSlice } from "@reduxjs/toolkit";

const quizSlice = createSlice({
  name: "Quiz",
  initialState: null,
  reducers: {
    addQuiz: (state, action) => {
      return action.payload;
    },
    removeQuiz: (state, action) => {
      return null;
    },
  },
});

export const { addQuiz, removeQuiz } = quizSlice.actions;
export default quizSlice.reducer;
