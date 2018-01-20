// import { combineReducers } from "redux";
// import loginReducer from "./loginReducer";
//
// const rootReducer = combineReducers({
//   currentUser: loginReducer
// });
//
// export default rootReducer;

import { combineReducers } from "redux";
import horoscopesReducer from "./horoscopesReducer";

const rootReducer = combineReducers({
  horoscopes: horoscopesReducer
});

export default rootReducer;

