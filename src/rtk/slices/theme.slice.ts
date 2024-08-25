import {createSlice} from '@reduxjs/toolkit';
import { SessionStorageItems } from '../../enums/session-storage-items.enum';
import { Themes } from '../../enums/themes.enum';

interface IThemeState {
    theme: string;
}

const initialState: IThemeState = {
    theme: sessionStorage.getItem(SessionStorageItems.THEME) || Themes.DARK,
};

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        changeTheme: state => {
            state.theme = state.theme === Themes.DARK ? Themes.LIGHT : Themes.DARK;
            sessionStorage.setItem(SessionStorageItems.THEME, state.theme);
        }
    }
});

const themeActions = {...themeSlice.actions};

export {
    themeActions,
    themeSlice
}