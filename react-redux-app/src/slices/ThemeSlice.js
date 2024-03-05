import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: "light" };
export const ThemeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.value = state.value === "light" ? "dark" : "light";
    },
    setTheme: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { toggleTheme, setTheme } = ThemeSlice.actions;

export default ThemeSlice.reducer;
