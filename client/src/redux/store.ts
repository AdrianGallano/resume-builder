import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/authSlice"; // Import your authSlice reducer here
import { authApi } from "./api/authApi";
import resumeReducer from "./features/resumeSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer, // Include your authSlice reducer in the reducer object
    [authApi.reducerPath]: authApi.reducer,
    resume: resumeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
