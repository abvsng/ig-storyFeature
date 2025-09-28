import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./Slices/counterSlice.jsx";
import modalReducer from "./Slices/modalSlice.jsx";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    isModalOpen: modalReducer,
  },
});

