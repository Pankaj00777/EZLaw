
import AllOrders from "../module/user/allOrders";
import Dashboard from "../module/user/dashboard";
import Recommendations from "../module/user/recommendations";
import Settings from "../module/user/settings";
import VirtualMailBox from "../module/user/virtualMailbox";
import CompletedDocuments from "../module/user/completedDocuments";
// import MyProfile from "../module/user/settings/myProfile";
// import PaymentMethod from "../module/user/settings/paymentMethod";



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
  {
    path: "virtual-mailbox",
    element: <VirtualMailBox />,
  },
  {
    path: "all-orders",
    element: <AllOrders />,
  },
  {
    path: "completed-documents",
    element: <CompletedDocuments />,
  },
  
  // {
  //   path: "reports/inventory-ledger-report",
  //   element: <InventoryLedgerReport />,
  // },


];