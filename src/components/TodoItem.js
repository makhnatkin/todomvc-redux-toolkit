import React from "react";
import classnames from "classnames";

const TodoItem = ({ onToggleItem, onDeleteItem, text, completed }) => {
  return (
    <li
      className={classnames({
        completed: completed
      })}
    >
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={completed}
          onChange={onToggleItem}
        />
        <label>{text}</label>
        <button className="destroy" onClick={onDeleteItem} />
      </div>
    </li>
  );
};

export default TodoItem;
