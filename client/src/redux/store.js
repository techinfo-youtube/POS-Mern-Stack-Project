import { createStore, combineReducers, applyMiddleware } from "redux";

import thunk from "redux-thunk";

import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer } from "./rootReducer";

const finalReducer = combineReducers({
  rootReducer,
});

const intialState = {
  rootReducer: {
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
  },
};
const middleware = [thunk];

const store = createStore(
  finalReducer,
  intialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
