export enum AppRoutes {
    HOME = '/',
    POKEMONS = 'pokemons',
    POKEMONS_NAV = '/pokemons',
    FAVORITES = 'favorites',
    FAVORITES_NAV = '/favorites',
    SEARCH = 'search',
    SEARCH_NAV = '/search',
    POKEMON_DEATILS_NAV = '/pokemons/',
    DYNAMIC_SEARCH_BY_NAME = 'name/:pokemonName',
    DYNAMIC_SEARCH_BY_NAME_NAV = '/search/name/',
    DYNAMIC_SEARCH_BY_TYPE = 'type/:type',
    DYNAMIC_SEARCH_BY_TYPE_NAV = '/search/type/',
    DYNAMIC_SEARCH_BY_ABILITY = 'ability/:ability',
    DYNAMIC_SEARCH_BY_ABILITY_NAV = '/search/ability/',
    DYNAMIC_POKEMON_NAME = ':pokemonName',
    DYNAMIC_FORM_NAME = 'forms/:formName',
    DYNAMIC_FORM_NAME_NAV = '/forms/'
}