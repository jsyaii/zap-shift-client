import { createBrowserRouter } from "react-router";
import RootLayouts from "../Layouts/RootLayouts";
import HomeLayouts from "../Layouts/HomeLayouts";
import Coverage from "../pages/Coverage/Coverage";
import AuthLayouts from "../Layouts/AuthLayouts";
import LogIn from "../pages/LogIn/LogIn";
import Register from "../pages/Register/Register";

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
}


]);
