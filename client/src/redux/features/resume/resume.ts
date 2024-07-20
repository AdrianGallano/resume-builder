import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Resume } from '../../types/resume';

const initialState: Resume[] = [];

const resumeSlice = createSlice({
  name: 'resume',
  initialState,
  reducers: {
    setResumes(state, action: PayloadAction<Resume[]>) {
      return action.payload;
    },
    addResume(state, action: PayloadAction<Resume>) {
      state.push(action.payload);
    },
  },
});

export const { setResumes, addResume } = resumeSlice.actions;
export default resumeSlice.reducer;
