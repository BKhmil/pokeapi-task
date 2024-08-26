import {useForm, Controller} from 'react-hook-form';
import {TextField, Button, RadioGroup, FormControlLabel, Radio} from '@mui/material';
import {HEADER_HEIGHT} from "../../constants/styles";
import {useNavigate} from "react-router-dom";
import {AppRoutes} from "../../enums/app-routes.enum";

interface IForm {
    searchType: 'name' | 'type' | 'ability';
    query: string;
}

const SearchForm = () => {
    const navigate = useNavigate();

    const {control, register, handleSubmit, watch, reset} = useForm<IForm>({
        defaultValues: {
            searchType: 'name',
            query: ''
        }
    });

    const searchType = watch('searchType');

    const onSubmit = (data: IForm) => {
        switch (data.searchType) {
            case 'name':
                navigate(AppRoutes.DYNAMIC_SEARCH_BY_NAME_NAV + data.query);
                break
            case 'type':
                navigate(AppRoutes.DYNAMIC_SEARCH_BY_TYPE_NAV + data.query);
                break;
            case 'ability':
                navigate(AppRoutes.DYNAMIC_SEARCH_BY_ABILITY_NAV + data.query);
                break;
            default:
                break;
        }

        reset();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} style={{marginTop: `${HEADER_HEIGHT}px`}}>
            <Controller
                name="searchType"
                control={control}
                render={({field}) => (
                    <RadioGroup {...field}>
                        <FormControlLabel value="name" control={<Radio/>} label="Search by Name"/>
                        <FormControlLabel value="type" control={<Radio/>} label="Search by Type"/>
                        <FormControlLabel value="ability" control={<Radio/>} label="Search by Ability"/>
                    </RadioGroup>
                )}
            />
            <TextField
                label={`Search by ${searchType.charAt(0).toUpperCase() + searchType.slice(1)}`}
                {...register('query')}
                variant="outlined"
                fullWidth
                margin="normal"
            />
            <Button type="submit" variant="contained" color="primary">
                Search
            </Button>
        </form>
    );
};

export default SearchForm;

