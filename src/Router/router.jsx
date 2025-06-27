import { createBrowserRouter } from "react-router";
import Layout from "../Layout/Layout";
import Home from "../pages/Home/Home";
import Error from "../pages/Error/Error";



export const router = createBrowserRouter([
    {
        path: '/',
        Component: Layout,
        errorElement: <Error></Error>,
        children: [
            {
                index: true,
                Component: Home
            }
        ]
    }
])