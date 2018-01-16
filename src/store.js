import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/index";

export function configureStore() {
  return createStore(rootReducer, applyMiddleware(thunk));
}

export const store = configureStore();
