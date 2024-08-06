import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";
import clsx from "clsx";

const Navigation = () => {

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

export default Navigation;