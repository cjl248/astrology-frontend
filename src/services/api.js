const API_ROOT = `http://localhost:3000`;

const headers = {
  "Content-Type": "application/json",
  Accepts: "application/json"
};

const getHoroscopes = () => {
  return fetch(`${API_ROOT}/horoscopes/`, { headers: headers }).then(res =>
    res.json()
  );
};

const login = (name, password) => {
  return fetch(`${API_ROOT}/login`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({ name, password })
  }).then(res => res.json());
};

const getCurrentUser = () => {
  return fetch(`${API_ROOT}/current_user`, {
    headers: headers
  }).then(res => res.json());
};

export default {
  auth: {
    login,
    getCurrentUser
  },
  horoscopes: {
    getHoroscopes
  }
};
