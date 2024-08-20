import {RouteObject} from "react-router-dom";
import MainLayout from "../layouts/main-layout/MainLayout";

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <MainLayout/>
    }
];