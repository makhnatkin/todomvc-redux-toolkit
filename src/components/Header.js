import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/slices/todosSlice";
import TodoTextInput from "./TodoTextInput";

const Header = () => {
  const dispatch = useDispatch();
  const inputRef = useRef(null);

  const handleKeyDown = ({ which, target: { value } }) => {
    if (which === 13) {
      if (!value.trim()) {
        return;
      }

      const action = addTodo({
          id: new Date().getTime().toString(),
          text: value
      })

      console.log('addTodo action:', action);
      dispatch(action);

      inputRef.current.value = "";
    }
  };

  return (
    <header className="header">
      <h1>todos</h1>
      <TodoTextInput
        ref={inputRef}
        placeholder="What needs to be done?"
        onKeyDown={handleKeyDown}
      />
    </header>
  );
};

export default Header;
