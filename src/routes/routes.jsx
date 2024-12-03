import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import User from "../pages/users/User";
import CreateUser from "../pages/users/CreateUser";
import ManageUser from "../pages/users/ManageUser";


const routes = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/signUp',
        element: <SignUp />
    },

    {
        path: "/users/:id",
        element: <User />
    },
    {
        path: "/create-user",
        element: <CreateUser />
    },
    {
        path: "/manage-user",
        element: <ManageUser />
    },

])

export default routes