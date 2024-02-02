import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Container from "../UI/Container";

const Navbar = () => {
    const { user, logOut } = useAuth()

    const navLinks = [
        { id: 1, name: "HOME", link: "/" },
        { id: 2, name: "ABOUT", link: "/about" },
        { id: 3, name: "CONTACT", link: "/contact" },
        { id: 4, name: "SERVICES", link: "/services" }
        
    ]
    return (

        <Container>
            <div className="flex justify-between w-full items-center">
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
                <div className="">
                    {
                        user ?
                        <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                          <div className="w-10 rounded-full">
                            <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                          </div>
                        </div>
                        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                          <li>
                            <p className="justify-between">
                              Profile
                              <span className="badge">New</span>
                            </p>
                          </li>
                          <li><Link to={'/orders'}>Order</Link></li>
                          <li onClick={() => logOut()}>Logout</li>
                        </ul>
                      </div>
                    
                            :
                            <button><Link to={'/login'}>Login</Link></button>
                    }
                </div>
            </div>
        </Container>

    );
};

export default Navbar;