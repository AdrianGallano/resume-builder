import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface ResumeState {
  resumes: any[];
  loading: boolean;
  error: string | null;
}

const initialState: ResumeState = {
  resumes: [],
  loading: false,
  error: null,
};

// Async thunk to create a resume
export const createResume = createAsyncThunk<
  any,
  void,
  { rejectValue: string }
>("resume/createResume", async (_, { rejectWithValue }) => {
  try {
    const response = await axios.post("/api/resumes/");
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const errorMsg = error.response?.data.message || "Unknown error occurred";
      return rejectWithValue(errorMsg);
    } else {
      return rejectWithValue("An unknown error occurred");
    }
  }
});

const resumeSlice = createSlice({
  name: "resume",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createResume.pending, (state) => {
        state.loading = true;
      })
      .addCase(createResume.fulfilled, (state, action) => {
        state.loading = false;
        state.resumes.push(action.payload);
      })
      .addCase(createResume.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default resumeSlice.reducer;
