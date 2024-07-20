import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Project } from '../../types/resume';


const projectsSlice = createSlice({
  name: 'projects',
  initialState: [] as Project[],
  reducers: {
    setProjects(state, action: PayloadAction<Project[]>) {
      return action.payload;
    },
    addProject(state, action: PayloadAction<Project>) {
      state.push(action.payload);
    },
  },
});

export const { setProjects, addProject } = projectsSlice.actions;
export default projectsSlice.reducer;
