import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/home";
import { ListMovies } from "./pages/list-movies";
import { Layout } from "./layaout";

export const router = createBrowserRouter([
    {
        path: "/",
        element : <Layout/>,
        children : [
            {
                index: true,
                element : <Home/>
            },
            {
                path : '/movies',
                element : <ListMovies/>

            }
        ]
    }
])
