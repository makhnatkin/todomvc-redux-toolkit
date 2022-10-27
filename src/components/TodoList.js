import React from "react";
import TodoItem from "./TodoItem";
import { useDispatch, useSelector } from "react-redux";
import { toggleTodo, deleteTodo } from "../store/slices/todosSlice";

import { getFilter, getTodos } from '../store/selectors'

const TodoList = () => {
  const todos = useSelector(getTodos);
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();
  const createHandleToggle = ({ id }) => () => dispatch(toggleTodo(id));
  const createHandleDelete = ({ id }) => () => dispatch(deleteTodo(id));

  // TodoList
  const filteredTodos = todos.filter((item) => {
    if (filter === "Completed") {
      return item.completed;
    }
    if (filter === "Active") {
      return !item.completed;
    }
    return true;
  });

  return (
    <>
      <section className="main">
        <ul className="todo-list">
          {filteredTodos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggleItem={createHandleToggle(todo)}
              onDeleteItem={createHandleDelete(todo)}
            />
          ))}
        </ul>
      </section>
    </>
  );
};

export default TodoList;
