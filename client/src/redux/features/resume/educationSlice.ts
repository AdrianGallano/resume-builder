import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Education } from '../../types/resume';


const educationSlice = createSlice({
  name: 'education',
  initialState: [] as Education[],
  reducers: {
    setEducation(state, action: PayloadAction<Education[]>) {
      return action.payload;
    },
    addEducation(state, action: PayloadAction<Education>) {
      state.push(action.payload);
    },
  },
});

export const { setEducation, addEducation } = educationSlice.actions;
export default educationSlice.reducer;
