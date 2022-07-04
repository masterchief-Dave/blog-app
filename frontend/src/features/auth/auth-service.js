const axios = require('axios')
const signup = async (userData) => {
  const reponse = await fetch(`/api/v1/users/signup`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(userData),
  });

  const data = await reponse.json();
  return data;
};

const logout = async () => {
  const response = await localStorage.removeItem("user");

  return response;
};

const login = async (userData) => {
  const response = await fetch(`/api/v1/users/login`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(userData),
  });
  const req = await axios.post('/api/v1/users/login', userData)
  // const data = await response.json();
  // return data;
  const data = await req.data
  return data
};

export const authService = {
  signup,
  logout,
  login,
};

// bodunrindavidbond@gmail.com