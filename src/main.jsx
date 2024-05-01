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
        loader: () => fetch('https://craft-house-server.vercel.app/items'),
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
          fetch(`https://craft-house-server.vercel.app/items/${params.id}`),
      },
      {
        path: '/allItem',
        element: <AllItem />,
        loader: () => fetch('https://craft-house-server.vercel.app/items'),
      },
      {
        path: '/user/:email',
        element: (
          <PrivateRoute>
            <MyItem></MyItem>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://craft-house-server.vercel.app/user/${params.email}`),
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
