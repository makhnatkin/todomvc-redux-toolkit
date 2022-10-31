import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

// TODO: дописать
const todosSlice = createSlice({
  name: "errors",
  initialState,
  reducers: {
    addError(state, action) {
      const { id, text } = action.payload;
      state.data.push({ id, text, completed: false });
    },
  }
});

export const { addTodo, toggleTodo, deleteTodo } = todosSlice.actions;
export default todosSlice.reducer;
