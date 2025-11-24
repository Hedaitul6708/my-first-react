import { createBrowserRouter } from "react-router";
import Root from "./Root";
import About from "./layouts/About";
import Home from "./layouts/Home";
import Pages from "./layouts/Pages";
import Shop from "./layouts/Shop";
import Contact from "./layouts/Contact";
import Login from "./Pages/Login";
import Products from "./components/Products";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/about",
                element: <About></About>
            },
            {
                path:"/pages",
                element: <Pages></Pages>
            },
            {
                path: "/shop",
                element: <Shop></Shop>
            },
            {
                path:"/contact",
                element: <Contact></Contact>
            },
            {
                path:"/login",
                element: <Login></Login>
            },
             {
                path:"/products",
                element: <Products></Products>
            }
        ]
    }
])

export default router