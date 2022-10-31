import React from "react";
import classnames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedFilter } from "../store/slices/selectedFilterIdSlice";

import { getFilters, getItemWord, getSelectedFilterId, getFilteredTodos } from '../store/selectors'

const Footer = () => {

  // get
  const filters = useSelector(getFilters);
  const selectedFilterId = useSelector(getSelectedFilterId);

  const todos = useSelector(getFilteredTodos);
  const itemWord = useSelector(getItemWord);

  // set
  const dispatch = useDispatch();
  const createHandleFilterClick = id => () => dispatch(setSelectedFilter(id));

  return (
    <footer
      className="footer"
      style={{ display: "flex", justifyContent: "space-between" }}
    >
      <span className="todo-count">
        <strong>{todos.length || "No"}</strong> {itemWord} left
      </span>
      <ul className="filters" style={{ position: "relative" }}>
        {filters.map(({ id, title }) => (
          <li key={id}>
            <a
              className={classnames({ selected: id === selectedFilterId })}
              style={{ cursor: "pointer" }}
              onClick={createHandleFilterClick(id)}
            >
              {title}
            </a>
          </li>
        ))}
      </ul>
      <span
        style={{ zIndex: 10 }}
        onClick={() => {
          // dispatch(fetchTodos());
        }}
      >
        Load Online Todos
      </span>
    </footer>
  );
};

export default Footer;
