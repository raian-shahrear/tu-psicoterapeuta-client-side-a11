import { createBrowserRouter } from "react-router-dom";
import Root from '../Layouts/Root';
import ErrorPage from '../Pages/Others/ErrorPage';
import Home from "../Pages/Home";
import Login from '../Pages/Login'

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
        path: '/login',
        element: <Login />
      }
    ]
  }
])

export default routes;
  