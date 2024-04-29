import React from 'react'
import ReactDOM from 'react-dom/client'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Roots from './layout/Roots.jsx';
import NotFound from './Pages/NotFound/NotFound.jsx';
import Home from './Pages/Home/Home.jsx';
import AllTouristsSpot from './Pages/AllTouristsSpot/AllTouristsSpot.jsx';
import AddTouristSpot from './Pages/AddTouristsSpot/AddTouristSpot.jsx';
import MyList from './Pages/MyList/MyList.jsx';
import Register from './Pages/Register/Register.jsx';
import Login from './Pages/Login/Login.jsx';
import AuthProvider from './context/AuthProvider.jsx';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute.jsx';
import TouristSpotDetails from './Pages/TouristSpotDetails/TouristSpotDetails.jsx';
import Update from './Pages/Update/Update.jsx';
import CountryDetails from './Pages/CountryDetails/CountryDetails.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots></Roots>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: "/",
        loader: ()=>fetch('https://tourism-management-server-five.vercel.app/allTouristSpot'),
        element: <Home></Home>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/allTouristSpot",
        loader: ()=>fetch('https://tourism-management-server-five.vercel.app/allTouristSpot'),
        element: <AllTouristsSpot></AllTouristsSpot>,
      },
      {
        path: "/allTouristSpot/:id",
        loader: ({params})=>fetch(`https://tourism-management-server-five.vercel.app/allTouristSpot/${params.id}`),
        element: <TouristSpotDetails></TouristSpotDetails>,
      },
      {
        path: "/addTouristSpot",
        element: <ProtectedRoute><AddTouristSpot></AddTouristSpot></ProtectedRoute>,
      },
      {
        path: "/myList",
        element: <ProtectedRoute><MyList></MyList></ProtectedRoute>,
      },
      {
        path:"/allTouristSpot/countries/:country_Name",
        loader:({params})=>fetch(`http://localhost:5000/countries/${params.country_Name}`),
        element:<CountryDetails></CountryDetails>
      },
      {
        path: "/update/:id",
        loader:({params})=>fetch(`http://localhost:5000/update/${params.id}`),
        element: <ProtectedRoute><Update></Update></ProtectedRoute>,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
    <ToastContainer />
  </React.StrictMode>,
)
