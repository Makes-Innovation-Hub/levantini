import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  points: 0,
};
export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setPoints: (state, action) => {
      state.points = action.payload;
    },
  },
});

export const { setPoints } = appSlice.actions;

export default appSlice.reducer;
