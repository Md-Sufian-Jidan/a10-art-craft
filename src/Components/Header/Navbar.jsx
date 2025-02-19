import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import { Tooltip as ReactTooltip } from 'react-tooltip'
import { AuthContext } from "../../Contexts/AuthProvider";


const Navbar = () => {
    // Basic usage
    const { user, isLoading, logOut } = useContext(AuthContext);
    if (isLoading) {
        <div className="loading">Loading...</div>
    }
    console.log(user);

    const navLinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/addCraft">Add Craft</NavLink></li>
        <li><NavLink to="/allCrafts">All Craft</NavLink></li>
        <li><NavLink to="/myCrafts">My Craft</NavLink></li>
        <li><NavLink to="/artCrafts">Art & Craft</NavLink></li>
        <li><NavLink to="/register">Sign Up</NavLink></li>
        {/* {user &&
            <li><NavLink to="/about-us">About Us</NavLink></li>
        } */}
    </>
    //handle log out
    const handleLogOut = () => {
        logOut()
            .then(() => {
                return toast.success('User Log Out Successfully');
                // console.log(result.user);
            })
            .catch(() => {
                return toast.error('oops! Something wrong. please reload the page');
                // console.log(error.message);
            })
    }
    return (
        <div className="z-30 max-w-6xl mx-auto">
            <div className="navbar bg-base-100 z-20">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <a className="text-xl">Crafts House</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    <label className="cursor-pointer grid place-items-center">
                        <input type="checkbox" value="dark" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2" />
                        <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                        <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                    </label>
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <div className="cursor-pointer">
                                <img data-tooltip-id="my-tooltip" data-tooltip-content={user?.email} alt="photo url is not right" src={user ? user?.photoURL
                                    : "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"} />
                                <ReactTooltip id="my-tooltip" />
                            </div>
                        </div>
                    </div>
                    {user ?
                        <button onClick={handleLogOut} className="btn bg-[#f71113]">Log Out</button>
                        :
                        <Link to="/login" className="btn bg-[#14f70c]">Login</Link>
                    }
                </div>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Navbar;