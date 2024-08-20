import {useDispatch, useSelector} from "react-redux";
import {store} from "../rtk/store";

const useAppSelector = useSelector.withTypes<ReturnType<typeof store.getState>>();

const useAppDispatch = useDispatch.withTypes<typeof store.dispatch>();

export {
    useAppSelector,
    useAppDispatch
}