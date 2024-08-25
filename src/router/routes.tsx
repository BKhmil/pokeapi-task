import {RouteObject} from "react-router-dom";
import MainLayout from "../layouts/main-layout/MainLayout";
import {AppRoutes} from "../enums/app-routes.enum";
import HomePage from "../pages/home-page/HomePage";
import ErrorLayout from "../layouts/error-layout/ErrorLayout";
import PokemonsPage from "../pages/pokemons-page/PokemonsPage";
import PokemonDetailsPage from "../pages/pokemon-details-page/PokemonDetailsPage";
import PokemonsLayout from "../layouts/pokemons-layout/PokemonsLayout";
import SearchLayout from "../layouts/search-layout/SearchLayout";
import PreSearch from "../components/pre-search/PreSearch";
import SearchByNamePage from "../pages/search-by-name-page/SearchByNamePage";
import SearchByTypePage from "../pages/search-by-type-page/SearchByTypePage";
import SearchByAbilityPage from "../pages/search-by-ability-page/SearchByAbilityPage";

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
                        path: AppRoutes.DYNAMIC_POKEMON_NAME,
                        element: <PokemonDetailsPage />
                    }
                ]
            },
            {
                path: AppRoutes.SEARCH,
                element: <SearchLayout />,
                children: [
                    {
                        index: true,
                        element: <PreSearch />
                    },
                    {
                        path: AppRoutes.DYNAMIC_SEARCH_BY_NAME,
                        element: <SearchByNamePage />
                    },
                    {
                        path: AppRoutes.DYNAMIC_SEARCH_BY_TYPE,
                        element: <SearchByTypePage />
                    },
                    {
                        path: AppRoutes.DYNAMIC_SEARCH_BY_ABILITY,
                        element: <SearchByAbilityPage />
                    }
                ]
            }
        ]
    }
];