import { NavLink } from "react-router-dom";

const Sidebar = () => {
    const navLinks = [
        {id:1,name: "About",link: "/about"},
        {id:2,name: "Contact",link: "/contact"}
    ]
    return (
        <div className="drawer-side">
                <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-200">
                    {/* Sidebar content here */}
                    {
                        navLinks.map(data =><li className="flex flex-col gap-3" key={data.id}><NavLink
                            to={data.link}
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? 'btn btn-primary ' : 'btn btn-ghost '
                            }
                        >
                            {data.name}
                        </NavLink></li>)
                    }
                </ul>
            </div>
    );
};

export default Sidebar;