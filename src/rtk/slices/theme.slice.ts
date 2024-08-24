import {createSlice} from '@reduxjs/toolkit';

interface IThemeState {
    theme: string;
}

const initialState: IThemeState = {
    theme: sessionStorage.getItem('theme') || 'dark',
};

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        changeTheme: state => {
            state.theme = state.theme === 'dark' ? 'light' : 'dark';
            sessionStorage.setItem('theme', state.theme);
        }
    }
});

const themeActions = {...themeSlice.actions};

export {
    themeActions,
    themeSlice
}