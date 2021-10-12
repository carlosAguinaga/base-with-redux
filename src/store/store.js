import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import thunk from "redux-thunk";
import { modalReducer } from "../reducers/modal.Reducer";
import { userReducer } from "../reducers/user.Reducer";
import { pokemonReducer } from "../reducers/pokemon.reducer";

const reducers = combineReducers({
  modal: modalReducer,
  user: userReducer,
  pokemon: pokemonReducer
});

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

export const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));
// export const store = createStore(reducers);
