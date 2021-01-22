function a (arg) {
    console.log(arg, 1);
    return arg;
}

function b (arg) {
    console.log(arg, 2);
    return arg;
}

function c (arg) {
    console.log(arg,3 );
    return arg;
}

a(b(c('arg')));


// 聚合函数
function compose (...funcs) {
    if (funcs.length === 0) {
        return  () => {};
    }
    if (funcs.length === 1) {
        return funcs[0]
    }
    return funcs.reduce((a, b) => (...args) => a(b(...args)))
}

// let res = compose(a, b, c);
// res('compose');
// enhancer增强器

// reduce的实现
function createStore (reducer, {}, enhancer) {
    let currentState = undefined;
    let currentListener = [];
    function getState () {
        return currentState;
    }
    function dispatch (action) {
        currentState = reducer(currentState, action);
        currentListener.map(listener => listener());
    }

    function subscribe (listener) {
        currentListener.push(listener);
    }

    // 初始值，保证项目初始化的时候
    dispatch({type: "@INIT/REDUX"});
    return {
        subscribe,
        dispatch,
        getState
    }
}

function combineReducers (arg) {

}

function bindActionCreators (creator, dispatch) {
    return (...args) => dispatch(...creator)
}

function applyMiddleware (...middleware) {
    return createStore => (...args) => {
        const store = createStore(...args);
        const dispatch = store.dispatch
        const middleApi = {
            getState: store.getState,
            dispatch
        }
        const middleWareChain = middleware.map(middleware => middleware(middleApi));
        dispatch = compose(...middleWareChain)(dispatch);
        return {
            ...store,
            dispatch
        }
    }
}
