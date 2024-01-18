import PropTypes from 'prop-types';
import Navbar from './Navbar';
import Sidebar from './Sidebar';


const MainLayout = ({ children }) => {
    return (
        <div className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* Navbar */}
                <div className="w-full navbar bg-base-300">
                    <Navbar/>
                </div>
                {/* Page content here */}
                {children}
            </div>
            {/* Sidebar */}
            <Sidebar/>
        </div>
    );
};

export default MainLayout;
MainLayout.propTypes = {
    children: PropTypes.node,
}