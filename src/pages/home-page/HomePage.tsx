import { HEADER_HEIGHT } from "../../constants/styles";
import {useTitle} from "../../hooks/useTitle";

const HomePage = () => {
    useTitle('PokeWiki | Home');

    return (
        <div style={{marginTop: `${HEADER_HEIGHT}px`}}>home page</div>
    );
}

export default HomePage;