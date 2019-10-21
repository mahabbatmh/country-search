import { createStore, compose, applyMiddleware } from "redux";
import createSagaMiddleWare from "redux-saga";
import schema from "state/schema";

import rootReducer from "state/reducers";
import rootSaga from "state/sagas";
// create saga middleware
const sagaMiddleWare = createSagaMiddleWare();

// initial data for entire app.
const initialData = schema;
const middlewares = [sagaMiddleWare];
const enhancers = [];

// redux dev tool extension for only development usage.

if (process.env.NODE_ENV === "development") {
    const devtool = window.__REDUX_DEVTOOLS_EXTENSION__;
    if (typeof devtool === "function") {
        enhancers.push(devtool());
    }
}

// compose and apply middlewares and enhancers
const composedEnhancers = compose(
    applyMiddleware(...middlewares),
    ...enhancers
);

// create redux store
const store = createStore(rootReducer, initialData, composedEnhancers);

// start saga
sagaMiddleWare.run(rootSaga);

export default store;
