import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Module from "../module";
import { Admin } from "./Admin";
import { Auth } from "./Auth";
import { User } from "./User";
import ProtectedRoute from "./ProtectedRoute";
import { DefaultAdminPage, DefaultUserPage } from "../config";
import { setData } from "../redux/action";

export default function AppRoutes() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.data);
  const session = useSelector((state) => state.session.data);
  const userToken = user?.token;
  const loginType = user?.loginType;



  // Fetch session or check login status on initial load
  useEffect(() => {
    // Dispatch an action to check user session or any setup actions you need
    if (!session) {
      dispatch({ type: "CHECK_SESSION" }); // Assuming you have a CHECK_SESSION action
    }
  }, [session, dispatch]);


  // Define routes for admin and user roles
  const pages = {
    admin: Admin,
    user: User,
  };

  // Default routes for admin and user
  const findRoutes = {
    admin: DefaultAdminPage,
    user: DefaultUserPage,
  };



  // Create the router with proper redirection and role-based routes
  const router = createBrowserRouter([
    // Redirect root path based on login type or go to sign-in
    {
      path: "/",
      element: session ? (
        loginType ? <Navigate to={findRoutes?.[loginType]} /> : <Navigate to="/sign-in" />
      ) : (
        <div>Loading...</div> // Show a loading state until session resolves
      ),
    },
    // Auth routes (only for unauthenticated users)
    ...Auth,
    // Role-based routes (only for authenticated users)
    ...(loginType
      ? [
          {
            path: "/",
            element: <Module setData={(e) => dispatch(setData(e))} userToken={userToken} loginType={loginType} user={user}/>,
            children: (pages[loginType] || []).map((route) => {
              // console.log(route); 
              return {
                path: route.path,
                element: <ProtectedRoute setData={(e) => dispatch(setData(e))} user={user} element={route.element} />,
              };
            }),
          },
          {
            path: "*",
            element: <Navigate to="/" />,
          },
        ]
      : []),
    // Catch-all route for unauthenticated users
    {
      path: "*",
      element: <Navigate to="/sign-in" />,
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
}
