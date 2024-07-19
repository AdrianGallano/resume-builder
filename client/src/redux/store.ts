import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/authSlice"; // Import your authSlice reducer here
import { authApi } from "./api/authApi";
import profileReducer from "./features/resume/profile"
import resumeReducer from "./features/resume/resume"; // Import your resumeSlice reducer here
import workExperienceReducer from "./features/resume/workExperinceSlice"; // Import your workExperienceSlice reducer here
import educationReducer from "./features/resume/educationSlice"; // Import your educationSlice reducer here
import projectsReducer from "./features/resume/project"; // Import your projectsSlice reducer here
import skillsReducer from "./features/resume/skills"; // Import your skillsSlice reducer here
import certificationsReducer from "./features/resume/certifications"; // Import your certificationsSlice reducer here

export const store = configureStore({
  reducer: {
    auth: authReducer,
    profile: profileReducer,
    resume: resumeReducer,
    workExperience: workExperienceReducer,
    education: educationReducer,
    projects: projectsReducer,
    skills: skillsReducer,
    certifications: certificationsReducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
