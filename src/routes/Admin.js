import Dashboard from "../module/admin/dashboard";
import ManageUser from "../module/admin/manage-user";


export const Admin = [
    {
        path: '/',
        element: 'No Found', 
    },
    {
        path: '/manage-user',
        element: <ManageUser />, 
    },
    {
        path: '/dashboard',
        element: <Dashboard />, 
    },
    
  ];
