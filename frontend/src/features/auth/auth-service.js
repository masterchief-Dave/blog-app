const signup = async (userData) => {
  const user = await fetch(`localhost://8000/api/v1/users/signup`);
};

export const authService = {
  signup,
};
