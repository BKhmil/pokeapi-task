import {toast, ToastContainer} from "react-toastify";
import {useEffect} from "react";
import 'react-toastify/dist/ReactToastify.css';

const Guide = () => {
    const notify = () => {
        toast.info('To navigate to a specific Pokémon page, click on its image');
    };

    useEffect(() => {
        notify();
    }, []);

    return <ToastContainer />;
}

export default Guide;