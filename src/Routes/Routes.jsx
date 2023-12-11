import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import Projects from "../components/Projects";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      children:[
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/projects',
          element:<Projects></Projects>
        },
        
      ]
    },
  ]);