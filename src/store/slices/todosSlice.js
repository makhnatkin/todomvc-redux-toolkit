import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  isLoading: false,
  error: false
};


const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo(state, action) {
      const { id, text } = action.payload;
      state.data.push({ id, text, completed: false });
    },
    toggleTodo(state, action) {
      const id = action.payload;
      const todo = state.data.find((todo) => todo.id === id);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    deleteTodo(state, action) {
      const id = action.payload;
      state.data = state.data.filter((todo) => {
        return todo.id !== id;
      });
    }
  }
});

export const { addTodo, toggleTodo, deleteTodo } = todosSlice.actions;
export default todosSlice.reducer;
