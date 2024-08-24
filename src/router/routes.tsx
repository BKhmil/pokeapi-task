import {RouteObject} from "react-router-dom";
import MainLayout from "../layouts/main-layout/MainLayout";
import {AppRoutes} from "../enums/app-routes.enum";
import HomePage from "../pages/home-page/HomePage";
import ErrorLayout from "../layouts/error-layout/ErrorLayout";
import PokemonsPage from "../pages/pokemons-page/PokemonsPage";
import PokemonDetailsPage from "../pages/pokemon-details-page/PokemonDetailsPage";
import PokemonsLayout from "../layouts/pokemons-layout/PokemonsLayout";

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
                element: <PokemonsLayout />,
                children: [
                    {
                        index: true,
                        element: <PokemonsPage />
                    },
                    {
                        path: ':pokemonName',
                        element: <PokemonDetailsPage />
                    }
                ]
            }
        ]
    }
];