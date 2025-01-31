//ProtectedRoutes

// import React from "react";
// import { Navigate } from "react-router-dom";
// import { isAuthenticated } from "../utils/auth"; 
// const ProtectedRoute = ({ element, user, setData, session, setSessionData }) => {
//   const isAuth = isAuthenticated(user);
//   if (isAuth === null) {
//     return <div>Loading...</div>;
//   }
//   return isAuth ? element : <Navigate to="/sign-in" />;
// };

// export default ProtectedRoute;

import React from "react";
import { Navigate } from "react-router-dom";
import { isAuthenticated } from "../utils/auth"; // Adjust the path as necessary

const ProtectedRoute = ({
  element,
  user,
  setData,
  session,
  setSessionData,
}) => {
  return isAuthenticated(user) ? (
    React.cloneElement(element, {
      userData: user,
      setData: setData,
      setSessionData: setSessionData,
      session: session,
    })
  ) : (
    <Navigate to="/sign-in" />
  );
};

export default ProtectedRoute;
