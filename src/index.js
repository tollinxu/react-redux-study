import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";
import { rootReducer } from "./reducers/index";
import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk"
//import Logger from "./middleware/Logger"
import logger from "./middleware/LoggerStoreEnhancer"

const store = createStore(rootReducer, compose(applyMiddleware(thunkMiddleware), logger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
