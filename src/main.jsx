import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import MainLayout from './layout/MainLayout'

import Home from './components/Home'
import AuthProvider from './provider/AuthProvider'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import AddItem from './pages/AddItem'
import Details from './pages/Details'
import Error from './pages/Error'
import PrivateRoute from './Routes/PrivateRoute'
import AllItem from './pages/AllItem'
import MyItem from './pages/MyItem'
import Favourite from './pages/Favourite'
import CartCheckOut from './pages/CartCheckOut'

// import MyItems from './components/MyItems'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: () => fetch(`${import.meta.env.VITE_API_URL}/items`),
        // loader: () => fetch('http://localhost:3000/items'),
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <SignUp />,
      },
      {
        path: '/addItem',
        element: (
          <PrivateRoute>
            <AddItem></AddItem>
          </PrivateRoute>
        ),
      },
      {
        path: '/details/:id',
        element: (
          <PrivateRoute>
            <Details></Details>
          </PrivateRoute>
        ),
        // loader: ({ params }) =>
        //   fetch(`http://localhost:3000/items/${params.id}`),
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/items/${params.id}`),
      },
      {
        path: '/allItem',
        element: <AllItem />,
        loader: () => fetch(`${import.meta.env.VITE_API_URL}/items`),
      },
      {
        path: '/user/:email',
        element: (
          <PrivateRoute>
            <MyItem></MyItem>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/user/${params.email}`),
      },
      {
        path: '/favourite/:email',
        element: (
          <PrivateRoute>
            <Favourite></Favourite>
          </PrivateRoute>
        ),
        loader: () => fetch(`${import.meta.env.VITE_API_URL}/favourite`),
      },
      {
        path: '/cart/:email',
        element: (
          <PrivateRoute>
            <CartCheckOut></CartCheckOut>
          </PrivateRoute>
        ),
        loader: () => fetch(`${import.meta.env.VITE_API_URL}/cart`),
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      {/* <LoadingWrapper></LoadingWrapper> */}
    </AuthProvider>
  </React.StrictMode>
)
