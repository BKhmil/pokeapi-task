import {RouteObject} from "react-router-dom";
import MainLayout from "../layouts/main-layout/MainLayout";
import {AppRoutes} from "../enums/app-routes.enum";
import HomePage from "../pages/home-page/HomePage";
import ErrorLayout from "../layouts/error-layout/ErrorLayout";
import PokemonsPage from "../pages/pokemons-page/PokemonsPage";

export const routes: RouteObject[] = [
    {
        path: AppRoutes.HOME,
        element: <MainLayout/>,
        errorElement: <ErrorLayout />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: AppRoutes.POKEMONS,
                element: <PokemonsPage />
            }
        ]
    }
];