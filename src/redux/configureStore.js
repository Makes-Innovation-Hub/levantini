import { configureStore } from "@reduxjs/toolkit";
import { appSlice } from "./slices/app.slice";

export const store = configureStore({
  reducer: {
    app: appSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== "production",
});
