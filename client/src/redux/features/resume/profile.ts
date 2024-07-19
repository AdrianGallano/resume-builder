import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PersonalInformation } from '../../types/profile';


interface ProfileState {
  personalInfo: PersonalInformation | null;
}

const initialState: ProfileState = {
  personalInfo: null,
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setPersonalInfo(state, action: PayloadAction<PersonalInformation>) {
      state.personalInfo = action.payload;
    },
    updatePersonalInfo(state, action: PayloadAction<Partial<PersonalInformation>>) {
      if (state.personalInfo) {
        state.personalInfo = { ...state.personalInfo, ...action.payload };
      }
    },
    clearPersonalInfo(state) {
      state.personalInfo = null;
    },
  },
});

export const { setPersonalInfo, updatePersonalInfo, clearPersonalInfo } = profileSlice.actions;

export default profileSlice.reducer;
