import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Skill } from '../../types/resume';


const skillsSlice = createSlice({
  name: 'skills',
  initialState: [] as Skill[],
  reducers: {
    setSkills(state, action: PayloadAction<Skill[]>) {
      return action.payload;
    },
    addSkill(state, action: PayloadAction<Skill>) {
      state.push(action.payload);
    },
  },
});

export const { setSkills, addSkill } = skillsSlice.actions;
export default skillsSlice.reducer;
