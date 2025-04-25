import { createSlice } from "@reduxjs/toolkit";

const answerSlice = createSlice({
  name: "answer",
  initialState: null,
  reducers: {
    addAnswers: (state, action) => {
      return action.payload;
    },
    removeAnswers: (state, action) => {
      return null;
    },
  },
});

export const { addAnswers, removeAnswers } = answerSlice.actions;
export default answerSlice.reducer;
