import { createSlice } from "@reduxjs/toolkit";
import { firstFilterId } from './filtersSlice'

const initialState = firstFilterId;

const selectedFilterIdSlice = createSlice({
  name: "selectedFilterId",
  initialState,
  reducers: {
    setSelectedFilter(_, {payload}) {
      return payload;
    }
  }
});

export const { setSelectedFilter } = selectedFilterIdSlice.actions;
export default selectedFilterIdSlice.reducer;
