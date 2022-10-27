import React from "react";
import classnames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../store/slices/filterSlice";

import { getFilter, getActiveTodos, getItemWord } from '../store/selectors'

const FILTER_TITLES = ["All", "Active", "Completed"];

const Footer = () => {

  // get
  const filter = useSelector(getFilter);
  const activeTodos = useSelector(getActiveTodos);
  const itemWord = useSelector(getItemWord);

  // set
  const dispatch = useDispatch();
  const createHandleFilterClick = filterTitle => () => dispatch(setFilter(filterTitle));

  return (
    <footer
      className="footer"
      style={{ display: "flex", justifyContent: "space-between" }}
    >
      <span className="todo-count">
        <strong>{activeTodos.length || "No"}</strong> {itemWord} left
      </span>
      <ul className="filters" style={{ position: "relative" }}>
        {FILTER_TITLES.map((filterTitle) => (
          <li key={filterTitle}>
            <a
              className={classnames({ selected: filterTitle === filter })}
              style={{ cursor: "pointer" }}
              onClick={createHandleFilterClick(filterTitle)}
            >
              {filterTitle}
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
