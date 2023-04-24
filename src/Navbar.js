import { NavLink } from "react-router-dom";





function Navbar() {
    return (
        <nav>
            <NavLink to="/Doritos">Doritos</NavLink>
            <NavLink to="/Skittles">Skittles</NavLink>
            <NavLink to="/Pepsi">Pepsi</NavLink>
        </nav>
    )
}