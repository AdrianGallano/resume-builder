import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { WorkExperience } from '../../types/resume';


const workExperienceSlice = createSlice({
  name: 'workExperience',
  initialState: [] as WorkExperience[],
  reducers: {
    setWorkExperience(state, action: PayloadAction<WorkExperience[]>) {
      return action.payload;
    },
    addWorkExperience(state, action: PayloadAction<WorkExperience>) {
      state.push(action.payload);
    },
  },
});

export const { setWorkExperience, addWorkExperience } = workExperienceSlice.actions;
export default workExperienceSlice.reducer;
