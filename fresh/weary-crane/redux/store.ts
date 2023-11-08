import * as rtk from "@reduxjs/toolkit";
import themeReducer from "../features/theme/themeSlice.ts";

export const store = rtk.configureStore({
  reducer: {
    theme: themeReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
