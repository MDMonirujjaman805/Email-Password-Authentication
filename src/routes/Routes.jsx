import { createBrowserRouter } from "react-router";
import Main from "../layout/Main";
import Home from "../layout/Home";
import Login from "../components/Login";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import Register from "../components/Register";
import ErrorPage from "../components/ErrorPage";
import ForgotPassword from "../components/ForgotPassword";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
        children: [],
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signin",
        element: <SignIn />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "forgotpassword",
        element: <ForgotPassword />, // create this component
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);
export default Routes;
