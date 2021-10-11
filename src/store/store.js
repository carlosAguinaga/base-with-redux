import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import { modalReducer } from "../reducers/modal.Reducer";
import { userReducer } from "../reducers/user.Reducer";

const reducers = combineReducers({
  modal: modalReducer,
  user: userReducer,
});

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

export const store = createStore(reducers, composeEnhancers(applyMiddleware));
