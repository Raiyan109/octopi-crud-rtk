import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import User from "../pages/users/User";
import CreateUser from "../pages/users/CreateUser";
import ManageUsers from "../pages/users/ManageUsers";
import EditUser from "../pages/users/EditUser";



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
        path: "/edit-user/:id",
        element: <EditUser />
    },
    {
        path: "/create-user",
        element: <CreateUser />
    },
    {
        path: "/manage-user",
        element: <ManageUsers />
    },

])

export default routes