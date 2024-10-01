import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Third from './ThirdPage/Third.jsx'
import Login from './LoginandSignup/Login.jsx'
import Signup from './LoginandSignup/Signup.jsx'
import Last from './Last/Last.jsx'

const router = createBrowserRouter([
  {
    path: '/',  
    element: <App />, 
  },
  {
    path: '/allproducts',  
    element: <Third />,  
  },
  {
    path: '/login',  
    element: <Login />,  
  },
  {
    path: '/signup',  
    element: <Signup />,  
  },
  {
    path: '/product',  
    element: <Last />,  
  },
]);
  

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)