import {HEADER_HEIGHT, PAGE_MIN_HEIGHT} from "../../constants/styles";
import Container from "@mui/material/Container";
import {useAppDispatch} from "../../hooks/rtk";
import {useEffect} from "react";
import {pokemonFormExtraReducers} from "../../rtk/extra-reducers/pokemon-form.extra.reducer";
import {useParams} from "react-router-dom";
import FormDetails from "../../components/form-details/FormDetails";
import {useTitle} from "../../hooks/useTitle";

const FormPage = () => {
    useTitle('PokeWiki | Form');

    const dispatch = useAppDispatch();

    const {formName} = useParams();

    useEffect(() => {
        formName && dispatch(pokemonFormExtraReducers.loadFormByName(formName));
    }, [formName]);

    return (
        <Container sx={{ marginTop: `${HEADER_HEIGHT}px`, minHeight: `${PAGE_MIN_HEIGHT}vh`}}>
            <FormDetails />
        </Container>
    );
}

export default FormPage;