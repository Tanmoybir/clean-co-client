import { Outlet } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";

const App = () => {
    return (
        <div>
            <MainLayout>
                <Outlet/>
            </MainLayout>
        </div>
    );
};

export default App;