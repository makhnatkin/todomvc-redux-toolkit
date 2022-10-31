
// pseudo redux thunk middleware
const test = (store) => next => action => {
    if (typeof action === 'function') {
        action(store, next, action)
    } else {
        store.dispatch(action)
    }
}

