const getDataFromServer = (type) => ({
    type,
    data: {},
    error: {}
});
const fetch = store => next => action => {
    const { dispatch } = store;

    // {
    //    url: ''
    //  }
    const { type, payload, url } = action;

    if (url) {
        // action - съеден

        // isLoading = false
        dispatch({
            type: `${type}_START` // isLoading = true
        })

        // async code
        (() => {
            const { data, error } = getDataFromServer(url, payload);

            if (data && !error) {
                dispatch({
                    type: `${type}_SUCCESS`,
                    payload: data
                })

            } else {
                dispatch({
                    type: `${type}_ERROR`,
                    payload: error
                })
            }

        })()
    } else {
        next(action)
    }
}

export default fetch;


// const template = store => next => action => {
//     console.log(store, next, action);
// }
