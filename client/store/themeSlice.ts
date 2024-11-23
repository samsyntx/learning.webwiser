import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the initial state of the theme with 3 options: light, dark, system
interface ThemeState {
  mode: "light" | "dark" | "system";
}

const initialState: ThemeState = {
  mode: "system", // default to system theme (this will follow system preferences)
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setLightMode(state) {
      state.mode = "light";
    },
    setDarkMode(state) {
      state.mode = "dark";
    },
    setSystemMode(state) {
      state.mode = "system";
    },
    toggleTheme(state) {
      if (state.mode === "light") {
        state.mode = "dark";
      } else if (state.mode === "dark") {
        state.mode = "system";
      } else {
        state.mode = "light";
      }
    },
  },
});

export const { setLightMode, setDarkMode, setSystemMode, toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
