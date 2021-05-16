import "./AppBar.scss";
import { NavLink } from "react-router-dom";

const AppBar = () => (


    <header className="header">

        <NavLink
            exact
            to="/"
            className="nav-link"
            activeClassName="nav-link__active"
        >
            Home
        </NavLink>
        <NavLink
            to="/movies"
            className="nav-link"
            activeClassName="nav-link__active"
        >
            Movies
        </NavLink>

    </header>

)

export default AppBar;