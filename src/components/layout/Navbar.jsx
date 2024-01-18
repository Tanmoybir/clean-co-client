import { NavLink } from "react-router-dom";

const Navbar = () => {
    const navLinks = [
        {id:1,name: "HOME",link: "/"},
        {id:2,name: "ABOUT",link: "/about"},
        {id:3,name: "CONTACT",link: "/contact"}
    ]
    return (

        <div className="max-w-screen-xl mx-auto flex justify-between w-full">
            <div className="flex-none lg:hidden">
                <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                </label>
            </div>
            <div className="flex-1 px-2 mx-2">Navbar Title</div>
            <div className="flex-none hidden lg:block">
                <div className="flex items-center gap-4">
                    {/* Navbar menu content here */}
                    {
                        navLinks.map(data => <li className="list-none" key={data.id}><NavLink
                            to={data.link}
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? 'btn btn-primary btn-sm' : 'btn btn-ghost btn-sm'
                            }
                        >
                            {data.name}
                        </NavLink></li>)
                    }
                </div>
            </div>
        </div>

    );
};

export default Navbar;