import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import logo from './logo.svg';
import './App.css';
import AppRoutes from './routes/AppRoutes';
import Home from './components/Home';


function App() {
  const router = createBrowserRouter([
    { path: "/", Component: Home },
    { path: "*", Component: AppRoutes },
  ]);
  return (
    <RouterProvider router={router} />
  );
}

export default App;
