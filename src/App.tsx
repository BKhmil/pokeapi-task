import {useAppSelector} from "./hooks/rtk";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import {CssBaseline} from "@mui/material";
import {RouterProvider} from "react-router-dom";
import {router} from "./router/router";
import { Themes } from "./enums/themes.enum";

const App = () => {
    const {theme} = useAppSelector(state => state.themeSlice);

    const themeConfig = createTheme({
        palette: {
            mode: theme === Themes.DARK ? Themes.DARK : Themes.LIGHT,
        },
    });

    return (
        <ThemeProvider theme={themeConfig}>
            <CssBaseline />
            <RouterProvider
                router={router}
            />
        </ThemeProvider>
    );
}

export default App;