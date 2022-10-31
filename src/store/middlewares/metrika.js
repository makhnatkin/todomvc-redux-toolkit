const metrika = store => next => action => {
    const { dispatch } = store;

    // {
    //    url: ''
    //  }
    const { type } = action;

    if (type === 'registation/onClick') {
        dispatch({
            type: `metrika/addCount`,
            payload: store.getState().metrika + 1;
        })
    } else {
        next(action)
    }
}

export default fetch;


// const template = store => next => action => {
//     console.log(store, next, action);
// }
