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
import Registerpage from './loginss/Registerpage';
import Stafflogin from './loginss/Stafflogin';
import Staffregister from './loginss/Staffregister';
import Nurses from './loginss/Nurses';
import Doclogin from './loginss/Doclogin';
import Docregister from './loginss/Docregister';
import Lab from './loginss/Lab'
import Labtechregister from './loginss/Labtecregister';
import Labtechlogin from './loginss/Labtechlogin';




const router = createBrowserRouter([
  {
    path: "/",
    element: <div><App /> </div>,
  },
  {
    path: "/patientprofile",
    element: <div><Patient /> </div>,
  },
  {
    path: "/aboutus",
    element: <div><Aboutus /> </div>,
  },
  {
    path: "/doctorprofile",
    element: <div><Doctor /> </div>,
  },
  {
    path: "/patient",
    element: <div><Loginpage /> </div>,
  },
  {
    path: "/registerpage",
    element: <div><Registerpage /> </div>,
  },
  {
    path: "/staffregister",
    element: <div><Staffregister /> </div>,
  },
  {
    path: "/nurses",
    element: <div><Stafflogin /> </div>,
  },
  {
    path: "/nursesprofile",
    element: <div><Nurses /> </div>,
  },
  {
    path: "/doctors",
    element: <div><Doclogin /> </div>,
  },
  {
    path: "/docregister",
    element: <div><Docregister /> </div>,
  },
  {
    path: "/labtechprofile",
    element: <div><Lab /> </div>,
  },
  {
    path: "/labtech",
    element: <div><Labtechlogin /> </div>,
  },
  {
    path: "/labtechregister",
    element: <div><Labtechregister /> </div>,
  },


]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);