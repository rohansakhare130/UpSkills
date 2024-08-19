import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Screen from "./components/screen/Screens";
import Home from "./components/Home/Home";
import Login from "./components/login/Login";
import SignUp from "./components/signup/SignUp";
import Log from "./components/home/Log";

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Screen />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/login',
          element: <Login />
        },
        {
          path: '/signup',
          element: <SignUp />
        },
        {
          path: '/dashbord',
          element: <Log />
        },
      
      ]
    },
  ]);

  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App;
