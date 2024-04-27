import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

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
const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots></Roots>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: "/",
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
        element: <AllTouristsSpot></AllTouristsSpot>,
      },
      {
        path: "/addTouristSpot",
        element: <AddTouristSpot></AddTouristSpot>,
      },
      {
        path: "/myList",
        element: <MyList></MyList>,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
