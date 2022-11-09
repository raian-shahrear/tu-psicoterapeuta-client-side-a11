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
import ServiceDetails from "../Pages/Others/ServiceDetails";
import PrivateRoute from "./PrivateRoute";


const routes = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/home',
        element: <Home />
      },
      {
        path: '/all-services',
        element: <AllServices />
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
        path: '/service-details',
        element: <ServiceDetails />
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
  