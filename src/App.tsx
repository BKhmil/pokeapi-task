import {useAppSelector} from "./hooks/rtk";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import {CssBaseline} from "@mui/material";
import {RouterProvider} from "react-router-dom";
import {router} from "./router/router";

const App = () => {
    const {darkMode} = useAppSelector(state => state.themeSlice);

    const theme = createTheme({
        palette: {
            mode: darkMode ? 'dark' : 'light',
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <RouterProvider
                router={router}
            />
        </ThemeProvider>
    );
}

export default App;