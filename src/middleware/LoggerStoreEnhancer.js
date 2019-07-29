const logger = createStore => (...args) =>{
    const store = createStore(...args);
    const dispatch = (action)=>{
        console.group(action.type);
        console.log('dispatching:' + action);
        let result = store.dispatch(action);
        console.log("next state:" + store.getState());
        console.group();
        return result;
    }

    return { ... store, dispatch };
}

export default logger