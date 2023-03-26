import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createStore,applyMiddleware } from "redux";
import {composeWithDevTools} from 'redux-devtools-extension'
import {Provider} from "react-redux"

import thunk from "redux-thunk"
import reducing from "./reducers/reducing";

const middleware =composeWithDevTools(applyMiddleware(thunk))
const store =createStore(
    reducing(),
    middleware,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);
