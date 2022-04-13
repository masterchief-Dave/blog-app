const signup = async (userData) => {
  const reponse = await fetch(`http://localhost:8000/api/v1/users/signup`, {
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
  const response = await fetch(`http://localhost:8000/api/v1/users/login`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(userData),
  });

  const data = await response.json();
  return data;
};

export const authService = {
  signup,
  logout,
  login,
};
