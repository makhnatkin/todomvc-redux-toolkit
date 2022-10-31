import React from "react";
import TodoItem from "./TodoItem";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo } from "../store/slices/todosSlice";
import { toggleCompletedTodoId } from '../store/slices/completedTodosIdsSlice'

import { getCompletedTodosIds, getFilteredTodos } from '../store/selectors'

const TodoList = () => {
  const todos = useSelector(getFilteredTodos);
  const completedTodosIds = useSelector(getCompletedTodosIds);

  const dispatch = useDispatch();
  const createHandleToggle = id => () => dispatch(toggleCompletedTodoId(id));
  const createHandleDelete = id => () => dispatch(deleteTodo(id));


  return (
    <>
      <section className="main">
        <ul className="todo-list">
          {todos.map(({ id, text }) => (
            <TodoItem
              completed={completedTodosIds.includes(id)}
              key={id}
              text={text}
              onToggleItem={createHandleToggle(id)}
              onDeleteItem={createHandleDelete(id)}
            />
          ))}
        </ul>
      </section>
    </>
  );
};

export default TodoList;
