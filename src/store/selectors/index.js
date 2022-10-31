export const getFilters = state => state.filters;
export const getSelectedFilterId = state => state.selectedFilterId;
export const getTodos = state => state.todos;
export const getCompletedTodosIds = state => state.completedTodosIds

export const getFilteredTodos = state => {
    const todos = getTodos(state);
    const completedTodosIds = getCompletedTodosIds(state);
    const filters = getFilters(state);
    const selectedFilterId = getSelectedFilterId(state);

    return todos.filter(({id}) => {
        if (selectedFilterId === filters[2].id) {
            return completedTodosIds.includes(id);
        }
        if (selectedFilterId === filters[1].id) {
            return !completedTodosIds.includes(id);
        }
        return true;
    });
}

export const getActiveTodos = state => {
    const todos = getTodos(state);
    return todos.filter((item) => !item.completed)
};

export const getItemWord = state => {
    const activeTodos = getActiveTodos(state);
    return activeTodos.length === 1 ? "item" : "items";
};