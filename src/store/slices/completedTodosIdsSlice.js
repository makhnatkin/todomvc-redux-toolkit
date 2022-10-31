import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const completedTodosIdsSlice = createSlice({
  name: "completedTodosIds",
  initialState,
  reducers: {
    toggleCompletedTodoId(state, {payload}) {
      if (state.includes(payload)) {
        return state.filter(id => id !== payload);
      } else {
        return [...state, payload];
      }
    },
  }
});

export const { toggleCompletedTodoId } = completedTodosIdsSlice.actions;
export default completedTodosIdsSlice.reducer;
