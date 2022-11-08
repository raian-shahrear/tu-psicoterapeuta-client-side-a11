import { createBrowserRouter } from "react-router-dom";
import Root from '../Layouts/Root';
import ErrorPage from '../Pages/Others/ErrorPage';
import Home from "../Pages/Home";
import Login from '../Pages/Login';
import SignUP from '../Pages/SignUp';
import AllServices from '../Pages/AllServices';
import AddService from '../Pages/AddService';
import MyReview from '../Pages/MyReview';


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
        element: <AddService />
      },
      {
        path: '/my-review',
        element: <MyReview />
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
  