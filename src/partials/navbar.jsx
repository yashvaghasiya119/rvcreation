import { NavLink } from "react-router";

export function Navbar() {

    return <>
        <div className="navbar-main">
            <div className="logo">
                <img className="img-logo" src="/Rvlogo.png" alt="no found" />
            </div>
        <ul>
            <li><NavLink to='/' className={({ isActive }) => isActive ? 'navlink active' : 'navlink'}>home</NavLink></li>
            <li><NavLink to='/about' className={({ isActive }) => isActive ? 'navlink active' : 'navlink'}>about</NavLink></li>
            <li><NavLink to='/product' className={({ isActive }) => isActive ? 'navlink active' : 'navlink'}>product</NavLink></li>
            <li><NavLink to='/contect' className={({ isActive }) => isActive ? 'navlink active' : 'navlink'}>contect</NavLink></li>
        </ul>
        </div>
    </>
}