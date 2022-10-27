export const getFilter = state => state.filter;
export const getTodos = state => state.todos.data;

export const getActiveTodos = state => {
    const todos = getTodos(state);
    return todos.filter((item) => !item.completed)
};

export const getItemWord = state => {
    const activeTodos = getActiveTodos(state);
    return activeTodos.length === 1 ? "item" : "items";
};