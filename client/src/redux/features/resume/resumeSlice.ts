// src/redux/features/resume/resumeSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query/react';
import { resumeApi } from '../../api/resumeApi';
import { SerializedError } from '@reduxjs/toolkit';

interface ResumeState {
  resumes: any[];
  loading: boolean;
  error: FetchBaseQueryError | SerializedError | null;
  resumeId: number | null; // Add this line
}

const initialState: ResumeState = {
  resumes: [],
  loading: false,
  error: null,
  resumeId: null, // Add this line
};

const resumeSlice = createSlice({
  name: 'resume',
  initialState,
  reducers: {
    setResumeId: (state, action: PayloadAction<number>) => {
      state.resumeId = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(resumeApi.endpoints.createResume.matchPending, (state) => {
      state.loading = true;
    });
    builder.addMatcher(resumeApi.endpoints.createResume.matchFulfilled, (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.resumes.push(action.payload);
      state.resumeId = action.payload.id; // Set resume ID here
    });
    builder.addMatcher(resumeApi.endpoints.createResume.matchRejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });
  },
});

export const { setResumeId } = resumeSlice.actions; // Export the action
export default resumeSlice.reducer;
