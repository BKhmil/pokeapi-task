import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import ErrorPage from "../../pages/error-page/ErrorPage";

const ErrorLayout = () => {
    return (
        <>
            <Header />
            <main>
                <ErrorPage />
            </main>
            <Footer />
        </>
    );
}

export default ErrorLayout;