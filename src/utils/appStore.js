import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import quizReducer from "./quizSlice";
import answerReducer from "./answerSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    quiz: quizReducer,
    answer: answerReducer,
  },
});

export default appStore;
