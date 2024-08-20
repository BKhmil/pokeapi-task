import {createSlice} from '@reduxjs/toolkit';

interface IThemeState {
    darkMode: boolean;
}

const initialState: IThemeState = {
    darkMode: false,
};

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleTheme(state) {
            state.darkMode = !state.darkMode;
        },
    },
});

const themeActions = {...themeSlice.actions};

export {
    themeActions,
    themeSlice
}