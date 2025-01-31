import SignUp from "../module/auth/sign-up";
import SignIn from "../module/auth/sign-in";
import ForgotPassword from "../module/auth/forgot-password";

export const Auth = [

    {
        path: '/sign-in',
        element: <SignIn />, 
    },
    {
        path: '/sign-up',
        element: <SignUp />, 
    },
    {
        path: '/forgot-password',
        element: <ForgotPassword />, 
    },

];