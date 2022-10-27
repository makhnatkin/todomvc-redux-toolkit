import React, { forwardRef } from "react";

const TodoTextInput = forwardRef((props, ref) => {
  const { placeholder, onKeyDown } = props;

  return (
    <div>
      <input
        type="text"
        className="new-todo"
        ref={ref}
        placeholder={placeholder}
        onKeyDown={onKeyDown}
      />
    </div>
  );
});

export default TodoTextInput;
