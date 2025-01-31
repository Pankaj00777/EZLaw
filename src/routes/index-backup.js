import React, { Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Module from "../module";
import { setData, setSessionData } from "../redux/action";
import ProtectedRoute from "./ProtectedRoute";
import { Admin } from "./Admin";
import { Auth } from "./Auth";
import { User } from "./User";

export default function Routers({ loading }) {

    
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.data);
  const session = useSelector((state) => state.session.data);
  const loginType = user?.loginType;

  const pages = {
    admin: Admin,
    user: User,
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navigate to="/dashboard" />,
    },
    ...Auth,
    ...(loginType
      ? [
          {
            path: "/",
            element: (
            //   <Suspense >
                <Module
                  user={user}
                  setData={(e) => dispatch(setData(e))}
                  setSessionData={(e) => dispatch(setSessionData(e))}
                  session={session}
                />
            //   </Suspense>
            ),
            children: (pages[loginType] || []).map((d, i) => ({
              path: d.path,
              element: (
                <ProtectedRoute
                  user={user}
                  setData={(e) => dispatch(setData(e))}
                  setSessionData={(e) => dispatch(setSessionData(e))}
                  session={session}
                  element={d.element}
                />
              ),
            })),
          },
          {
            path: "*",
            element: <Navigate to="/" />,
          },
        ]
      : []),
    {
      path: "*",
      element: <Navigate to="/sign-in" />,
    },
  ]);



  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
