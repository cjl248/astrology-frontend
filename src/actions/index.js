// import { adapter } from "../src/services";

export function login(name, password) {
  return dispatch => {
    let options = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, password })
    };
    fetch("http://localhost:3000/login", options)
      .then(res => res.json())
      .then(json => {
        localStorage.setItem("token", json.jwt);
        dispatch({ type: "LOGIN", user: json });
      });
  };
}

export function setCurrentUser() {
  console.log("SET CURRENT USER");
  return dispatch => {
    let headers = { Authorization: localStorage.getItem("token") };
    console.log("token", localStorage.getItem("token"));

    const token = localStorage.getItem("token");
    return fetch("http://localhost:3000/current_user", {
      headers: { Authorization: token }
    })
      .then(res => res.json())
      .then(json => {
        console.log("response", json);
        dispatch({ type: "LOGIN", user: json });
      });
  };
}

// export function fetchHoroscopes() {
//   return function(dispatch) {
//     adapter.horoscopes.getHoroscopes().then(data => {
//       dispatch({ type: "GET_HOROSCOPES", horoscopes: data });
//     });
//   };
// }
// export const fetchUser = () => dispatch => {
//   dispatch({ type: "ASYNC_START" });
//   adapter.auth.getCurrentUser().then(user => {
//     dispatch({ type: "SET_CURRENT_USER", user });
//   });
// };
//
// export const loginUser = (username, password, history) => dispatch => {
//   dispatch({ type: "ASYNC_START" });
//
//   adapter.auth.login({ username, password }).then(user => {
//     localStorage.setItem("token", user.jwt);
//     dispatch({ type: "SET_CURRENT_USER", user });
//     history.push("/profile");
//   });
// };
//
// export const logoutUser = () => {
//   localStorage.removeItem("token");
//   return { type: "LOGOUT_USER" };
// };
