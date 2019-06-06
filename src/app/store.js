import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import * as thunkMiddleware from "redux-thunk";
import promise from "redux-promise-middleware";
import { reducers } from "./reducers";

/**
 *  This defines base configuration for setting up redux with react.
 *  All the middlewares are defined here and base store is created for provider.
 */

let middlewares = [];

//for promises, since we are using axios for networking
middlewares.push(promise());

//for async operations, network calls
middlewares.push(thunkMiddleware.default);

//smart console logging of actions
if (process.env.NODE_ENV !== "production") {
    middlewares.push(logger);
}

// apply middlewares
let middleware = applyMiddleware(...middlewares);

// create store
const store = createStore(reducers, middleware);

// export
export { store };