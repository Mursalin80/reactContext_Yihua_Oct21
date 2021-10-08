import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

// import logger from 'redux-logger';

import rootReducer from "./root-reducer";

const middlewares = [];
let store;

// if (process.env.NODE_ENV === 'development') {
//   middlewares.push(logger);
// }

if (process.env.NODE_ENV === "development") {
  store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middlewares))
  );
}

store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
