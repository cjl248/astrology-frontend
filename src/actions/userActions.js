export function createUser(name, email, password) {
  return dispatch => {
    let options = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, email, password })
    };
    fetch("http://localhost:3000/api/v1/users", options)
      .then(res => res.json())
      .then(json => {
        localStorage.setItem("token", json.jwt);
        dispatch({ type: "LOGIN", user: json });
      });
  };
}

export function login(email, password) {
  return dispatch => {
    let options = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password })
    };
    fetch("http://localhost:3000/login", options)
      .then(res => res.json())
      .then(json => {
        localStorage.setItem("token", json.jwt);
        dispatch({ type: "LOGIN", user: json });
      });
  };
}

export function getCurrentUser() {
  return dispatch => {
    let headers = {
      headers: { Authorization: localStorage.getItem("token") }
    };
    return fetch("http://localhost:3000/current_user", headers)
      .then(res => res.json())
      .then(json => {
        dispatch({ type: "LOGIN", user: json });
      });
  };
}

export function logout() {
  localStorage.removeItem("token");
  return { type: "LOGOUT" };
}
