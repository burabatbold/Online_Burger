import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Pages/App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import { Provider } from "react-redux";
import reducer from "./Redux/Reducer/BurgerReducer";
import orderReducer from "./Redux/Reducer/Orderreducer";
import signUpReducer from "./Redux/Reducer/SignUpReducer";
import thunk from "redux-thunk";

const reducers = combineReducers({
  burgerReducer: reducer,
  orderReducer,
  signUpReducer,
});

const logger = (store) => {
  return (next) => {
    return (action) => {
      // console.log("My logger", action);
      // console.log("My logger state", store.getState());
      const result = next(action);
      // console.log("My logger state after : ", store.getState());
      return result;
    };
  };
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = [logger, thunk];

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(...middleware))
);
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
