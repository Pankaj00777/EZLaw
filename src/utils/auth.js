// utils/auth.js
export const isAuthenticated = (user) => {
    return Object.keys(user)?.length > 0; // Replace "authToken" with your key
  };
  