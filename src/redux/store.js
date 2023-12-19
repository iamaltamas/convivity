import { configureStore } from "@reduxjs/toolkit";
import app from "./counterSlice";
export const store = configureStore({
  reducer: {
    app: app,
  },
});
