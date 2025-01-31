
import Dashboard from "../module/user/dashboard";
import Recommendations from "../module/user/recommendations";
import Settings from "../module/user/settings";
import MyProfile from "../module/user/settings/myProfile";
import PaymentMethod from "../module/user/settings/paymentMethod";



export const User = [

{
    path: '/dashboard',
    element: <Dashboard />, 
},
  {
    path: "recommendations",
    element: <Recommendations />,
  },
  {
    path: "settings",
    element: <Settings />,
  },
  // {
  //   path: "settings/myprofile",
  //   element: <MyProfile />,
  // },
  // {
  //   path: "settings/paymentmethod",
  //   element: <PaymentMethod />,
  // },

  // {
  //   path: "reports/inventory-ledger-report",
  //   element: <InventoryLedgerReport />,
  // },


];