import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo(state, { payload }) {
      const { id, text } = payload;
      return [
          ...state,
        {id, text}
      ];
    },
    deleteTodo(state, { payload }) {
      return state.filter((todo) => todo.id !== payload);
    }
  }
});

export const { addTodo, toggleTodo, deleteTodo } = todosSlice.actions;
export default todosSlice.reducer;
