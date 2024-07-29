import { NavLink } from "react-router-dom";
import s from "./Header.module.css";
import clsx from "clsx";

const Header = () => {

const buildLinkClass = ({ isActive }) => {
  return clsx(s.navItems, isActive && s.active);
};

    return (
        <div className={s.header}>
            <nav>
                <ul className={s.navigation}>
                    <li ><NavLink to="/" className={buildLinkClass}>Home</NavLink></li>
                    <li><NavLink to="/movies"  className={buildLinkClass}>Movies</NavLink></li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;