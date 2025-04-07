import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import ErrorPage from '../pages/ErrorPage';
import AddTutor from '../pages/AddTutor';
import MainLayout from '../layout/MainLayout';
import Login from '../pages/Authentication/Login';
import Register from '../pages/Authentication/Register';

const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout/>,
      errorElement: <ErrorPage/>,
      children:[
        {
          path: '/',
          element: <Home/>,
        },
        {
          path: '/add-tutor',
          element: <AddTutor/>
        },
        {
          path: '/find-tutors'
        },
        {
          path: '/login',
          element: <Login/>,
        },
        {
          path: '/register',
          element: <Register/>
        }
      ]
    }
]);


export default router;