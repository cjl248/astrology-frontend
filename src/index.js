import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import { browserHistory } from "react-router";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const middlewares = [thunk, ]

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,

  document.getElementById("root")
);

// import React from "react";
// import ReactDOM from "react-dom";
// import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
// import App from "./App";
// import { Provider } from "react-redux";
// import { store } from "./store.js";
//
// ReactDOM.render(
//   <Router>
//     <div>
//       <Provider store={store}>
//         <App />
//       </Provider>
//     </div>
//   </Router>,
//
//   document.getElementById("root")
// );

// const link = {
//   width: "100px",
//   padding: "12px",
//   margin: "0 6px 6px",
//   background: "blue",
//   textDecoration: "none",
//   color: "white"
// };
//
// /* add the navbar component */
// const Navbar = () => (
//   <div>
//     <NavLink
//       to="/"
//       /* set exact so it knows only to only set activeStyle when route is deeply equal to link */
//       exact
//       /* add styling to Navlink */
//       style={link}
//       /* add prop for activeStyle */
//       activeStyle={{
//         background: "darkblue"
//       }}
//     >
//       Home
//     </NavLink>
//     <NavLink
//       to="/about"
//       exact
//       style={link}
//       activeStyle={{
//         background: "darkblue"
//       }}
//     >
//       About
//     </NavLink>
//     <NavLink
//       to="/login"
//       exact
//       style={link}
//       activeStyle={{
//         background: "darkblue"
//       }}
//     >
//       Login
//     </NavLink>
//   </div>
// );
//
// const Home = () => <h1>Home</h1>;
//
// const About = () => <h1>About</h1>;
//
// const Login = () => (
//   <form>
//     <h1>Login</h1>
//     <div>
//       <input type="text" name="username" placeholder="Username" />
//       <label htmlFor="username">Username</label>
//     </div>
//     <div>
//       <input type="password" name="password" placeholder="Password" />
//       <label htmlFor="password">Password</label>
//     </div>
//     <input type="submit" value="Login" />
//   </form>
// );
//
// const App = () => {
//   return (
//     <Router>
//       <div>
//         <Navbar />
//         <Route exact path="/" render={Home} />
//         <Route exact path="/about" render={About} />
//         <Route exact path="/login" render={Login} />
//       </div>
//     </Router>
//   );
// };

// ReactDOM.render(<App />, document.getElementById("root"));
