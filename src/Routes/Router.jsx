import { createBrowserRouter } from "react-router";
import RootLayouts from "../Layouts/RootLayouts";
import HomeLayouts from "../Layouts/HomeLayouts";
import Coverage from "../pages/Coverage/Coverage";
import AuthLayouts from "../Layouts/AuthLayouts";
import LogIn from "../pages/LogIn/LogIn";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Rider from "../pages/Rider/Rider";
import SendParcel from "../pages/sendParcel/sendParcel";
import DashboardLayout from "../Layouts/DashboardLayouts";
import MyParcels from "../pages/Dashboard/MyParcels";
import Payment from "../pages/Dashboard/Payment/Payment";
import PaymentSuccess from "../pages/Dashboard/PaymentSuccess/PaymentSuccess";
import PaymentCancelled from "../pages/Dashboard/PaymentCancelled/PaymentCancelled";
import PaymentHistory from "../pages/Dashboard/PaymentHistory/PaymentHistory";
import ApproveRiders from "../pages/Dashboard/ApproveRiders/ApproveRiders";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayouts,
    children:[
        {
index:true,
Component: HomeLayouts
        },


        {

path: "/rider",
element: <PrivateRoute>
  <Rider></Rider>,
</PrivateRoute>,
loader: () => fetch('/serviceCenters.json')
 .then(res => res.json())

        },
        {

path: "/send-parcel",
element: <PrivateRoute>
  <SendParcel></SendParcel>
</PrivateRoute>,
loader: () => fetch('/serviceCenters.json')
 .then(res => res.json())


        },
        {
path:"/coverage",
Component: Coverage,
 loader: () => fetch('/serviceCenters.json')
 .then(res => res.json())
        }
    ]
  },

{
path: "/",
    Component: AuthLayouts,
    children:[
{

path:"/login",
Component: LogIn,

},
{

path:"/register",
Component: Register,

}
    ]
},



{
path: "/dashboard",
   element:<PrivateRoute>
  <DashboardLayout></DashboardLayout>,
</PrivateRoute>,
    children:[
{

path:"my-parcels",
Component: MyParcels,


},

 {
        path: 'payment/:parcelId',
        Component: Payment,
      }, 
      {
        path: 'payment-success',
        Component: PaymentSuccess,
      }, 
      {
        path: 'payment-cancelled', 
        Component: PaymentCancelled,
      },
      {
        path: 'payment-history', 
        Component: PaymentHistory
      },
      {
        path: 'approve-riders', 
        Component: ApproveRiders
      }

    ]
}


]);
