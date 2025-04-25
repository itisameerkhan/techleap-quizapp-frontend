import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import quizReducer from "./quizSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    quiz: quizReducer,
  },
});

export default appStore;
