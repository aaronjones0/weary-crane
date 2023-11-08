import * as rtk from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../redux/store.ts";
import { createTheme, PRIMARY, Theme } from "../../theme/Theme.ts";

// Define a type for the slice state
export interface ThemeState {
  mode: "light" | "dark";
  theme: Theme;
}

// Define the initial state using that type
const initialState: ThemeState = {
  mode: "light",
  theme: createTheme(PRIMARY, "light"),
};

export const themeSlice = rtk.createSlice({
  name: "theme",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setDark: (state) => {
      const m = "dark";
      state.mode = m;
      state.theme = createTheme(PRIMARY, m);
    },
    setLight: (state) => {
      const m = "light";
      state.mode = m;
      state.theme = createTheme(PRIMARY, m);
    },
  },
});

export const { setDark, setLight } = themeSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectTheme = (state: RootState) => state.theme;

export default themeSlice.reducer;
