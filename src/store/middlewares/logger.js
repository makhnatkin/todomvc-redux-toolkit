const logger = store => next => action => {
    // console.log('==============================');
    // console.log('store.getState', store.getState());
    // console.log('next()', next(store.getState()));
    // console.log('action', action);

    console.warn(action)
    console.log('сейчас: ', store.getState())
    let result = next(action)
    console.log('будет:  ', store.getState())
    return result;
}

export default logger;


