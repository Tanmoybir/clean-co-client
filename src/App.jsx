import { Outlet } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import Footer from "./components/layout/Footer";

const App = () => {
    return (
        <div>
            <MainLayout>
                <Outlet/>
                <Footer/>
            </MainLayout>
        </div>
    );
};

export default App;