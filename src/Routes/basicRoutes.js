import { createBrowserRouter } from "react-router-dom";
import Root from '../Layouts/Root';
import ErrorPage from '../Pages/Others/ErrorPage';
import Home from "../Pages/MainPages/Home/Home";
import Login from '../Pages/MainPages/Login';
import SignUP from '../Pages/MainPages/SignUp';
import AllServices from '../Pages/MainPages/AllServices';
import AddService from '../Pages/MainPages/AddService';
import MyReview from '../Pages/MainPages/MyReview';
import Blog from "../Pages/MainPages/Blog/Blog";
import ServiceDetails from "../Pages/Others/ServiceDetails/ServiceDetails";
import PrivateRoute from "./PrivateRoute";


const routes = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: () => fetch("http://localhost:5000/service-home")
      },
      {
        path: '/home',
        element: <Home />,
        loader: () => fetch("http://localhost:5000/service-home")
      },
      {
        path: '/all-services',
        element: <AllServices />,
        loader: () => fetch("http://localhost:5000/services")
      },
      {
        path: '/add-service',
        element: <PrivateRoute><AddService /></PrivateRoute>
      },
      {
        path: '/my-review',
        element: <PrivateRoute><MyReview /></PrivateRoute>
      },
      {
        path: '/service-details/:id',
        element: <ServiceDetails />,
        loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
      },
      {
        path: '/blog',
        element: <Blog />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/signup',
        element: <SignUP />
      },
    ]
  }
])

export default routes;
  