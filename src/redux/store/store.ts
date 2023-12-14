import { configureStore } from "@reduxjs/toolkit";
import collegeReducer from "../feature/colleges/collegeSlice";
import infoPanelReducer from "../feature/infoPanel/infoPanelSlice";

export const store = configureStore({
  reducer: {
    colleges: collegeReducer,
    infoPanel: infoPanelReducer,
  },
});
