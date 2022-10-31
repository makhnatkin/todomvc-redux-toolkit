import { combineReducers } from "redux";
import todos from "../slices/todosSlice";
import filters from "../slices/filtersSlice";
import selectedFilterId from "../slices/selectedFilterIdSlice";
import completedTodosIds from "../slices/completedTodosIdsSlice";

const reducers = combineReducers({
  todos,
  filters,
  selectedFilterId,
  completedTodosIds,
});

export default reducers;


// const reduxState = {
//   todos: {
//     data: [],
//     isLoading: false,
//     error: false
//   },
//   filter: "All"
// }
