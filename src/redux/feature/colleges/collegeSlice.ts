import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ICollegeData, IActionSlice } from "./interfaces/interfaces";

const initialState: ICollegeData = {
  colleges: null,
  isLoading: false,
  isError: false,
  errorMessage: "",
  selectedCollege: "",
};

// const colleges = await getAllColleges();
const collegeSlice = createSlice({
  name: "college",
  initialState,
  reducers: {
    reset: (state) => {
      state.colleges = null;
    },
    // setter
    setColleges: (state: ICollegeData, action: IActionSlice) => {
      state.colleges = action.payload;
    },

    selectCollege: (state: ICollegeData, action: IActionSlice) => {
      state.selectedCollege = action.payload;
    },
  },
});

export default collegeSlice.reducer;
export const { reset, setColleges, selectCollege } = collegeSlice.actions;
