import {
    createBrowserRouter,

  } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/home";
import Bills from "../pages/Bills";
import CardDetails from "../pages/CardDetails";
import Login from "../pages/Login";
import Register from "../pages/register";
import Profile from "../component/Profile";
import PrivateRoute from "../privateRoute/PrivateRoute";
import ProfileUpdate from "../component/ProfileUpdate";
import Error from "../pages/Error";
  

export  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout></HomeLayout>,
      children: [
        { 
            index: true, 
            element:<Home></Home>
        },
        {
            path:"/bills",
            loader :()=>fetch('/bills.json'),
            element:<Bills></Bills>
        },
     {
        path:"/carddetail/:id",
        loader :()=>fetch("/bills.json"),
        element: <PrivateRoute>
            <CardDetails></CardDetails>
        </PrivateRoute>
        
     },
     {
        path:"/login",
        element: <Login></Login>
     },
     {
        path:"/register",
        element: <Register> </Register>
     },
     {
        path: "/profile",
        element : 
        <PrivateRoute>
          <Profile></Profile>
        </PrivateRoute>
        
     }
     ,
     {
        path: '/profileupdate',
        element : 
        <PrivateRoute>
 <ProfileUpdate></ProfileUpdate>
        </PrivateRoute>
       
     }
      ]
    },
    {
        path : "/*",
        element:<Error></Error>
    }
  ]);
  