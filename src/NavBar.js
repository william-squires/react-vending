import { NavLink } from "react-router-dom";
import "./NavBar.css"




//TODO: css active for navlink
function Navbar() {
    return (
        <nav className="NavBar">
            <NavLink to="/Doritos">Doritos</NavLink>
            <NavLink to="/Skittles">Skittles</NavLink>
            <NavLink to="/Pepsi">Pepsi</NavLink>
        </nav>
    )
}

export default Navbar;