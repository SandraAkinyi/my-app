import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Patient from "./loginss/Patient"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Aboutus from './loginss/Aboutus';
import Doctor from './loginss/Doctor';
import Loginpage from './loginss/Loginpage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <div><App /> </div>,
  },
  {
    path: "/patient",
    element: <div><Patient /> </div>,
  },
  {
    path: "/aboutus",
    element: <div><Aboutus /> </div>,
  },
  {
    path: "/doctor",
    element: <div><Doctor /> </div>,
  },
  {
    path: "/loginpage",
    element: <div><Loginpage /> </div>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);