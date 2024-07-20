import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Certification } from '../../types/resume';


const certificationsSlice = createSlice({
  name: 'certifications',
  initialState: [] as Certification[],
  reducers: {
    setCertifications(state, action: PayloadAction<Certification[]>) {
      return action.payload;
    },
    addCertification(state, action: PayloadAction<Certification>) {
      state.push(action.payload);
    },
  },
});

export const { setCertifications, addCertification } = certificationsSlice.actions;
export default certificationsSlice.reducer;
