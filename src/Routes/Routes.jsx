import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import Projects from "../components/Projects";
import AutoZone from "../Pages/AutoZone/AutoZone";
import BookProject from "../Pages/BookProject/BookProject";
import Contact from "../Pages/Contact/Contact";

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
        {
          path: '/autoZone',
          element: <AutoZone></AutoZone>
        },
        {
          path: '/bookWave',
          element: <BookProject></BookProject>
        },
        {
          path:'/contact',
          element: <Contact></Contact>
        }
      ]
    },
  ]);