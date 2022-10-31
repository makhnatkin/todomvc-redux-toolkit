import { createSlice } from "@reduxjs/toolkit";

export const firstFilterId = '0c3f45c2-4ca2-44fd-bed2-bbd8ce07d8c5';

const initialState = [{
  id: firstFilterId,
  title: 'All',
}, {
  id: 'c457b3f7-10db-4e59-92dc-5567b23fffd6',
  title: 'Active',
}, {
  id: 'd4a32edc-9335-41cc-83f1-1fc18109c6ba',
  title: 'Completed',
}];

const filtersSlice = createSlice({
  name: "filter",
  initialState,
});

export default filtersSlice.reducer;
