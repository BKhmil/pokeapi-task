import Header from "../../components/header/Header";
import {Outlet} from "react-router-dom";
import Footer from "../../components/footer/Footer";

const MainLayout = () => {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    );
}

export default MainLayout;