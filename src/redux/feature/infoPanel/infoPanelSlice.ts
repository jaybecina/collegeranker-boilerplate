import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { IInfoPanelProps, IActionSlice } from "./interfaces/interfaces";

const initialState: IInfoPanelProps = {
  infoPanelVisible: true,
};

const infoPanelSlice = createSlice({
  name: "infoPanel",
  initialState,
  reducers: {
    reset: (state) => {
      state.infoPanelVisible = false;
    },
    // setter
    setInfoPanelVisible: (state: IInfoPanelProps, action: IActionSlice) => {
      state.infoPanelVisible = action.payload;
    },
  },
});

export default infoPanelSlice.reducer;
export const { reset, setInfoPanelVisible } = infoPanelSlice.actions;
