import {Outlet} from "react-router-dom";
import SearchForm from "../../components/search-form/SearchForm";
import {HEADER_HEIGHT} from "../../constants/styles";
import Container from "@mui/material/Container";

const SearchLayout = () => {
    return (
        <>
            <Container sx={{ marginTop: `${HEADER_HEIGHT}px` }}>
                <SearchForm />
            </Container>
            <Outlet />
        </>
    );
}

export default SearchLayout;