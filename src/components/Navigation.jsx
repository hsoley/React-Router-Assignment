// modules
import React from 'react';
import { NavLink } from 'react-router-dom';
// style
import '../assets/css/style.css';


class Navigation extends React.Component {


    render() {
        return (
            <nav className="navContainer">
                <NavLink className={ ( {isActive} ) => isActive ? "navLink activeLink" : "navLink" } to="/">Home</NavLink>
                <NavLink className={ ( {isActive} ) => isActive ? "navLink activeLink" : "navLink" } to="/about">About</NavLink>
                <NavLink className={ ( {isActive} ) => isActive ? "navLink activeLink" : "navLink" } to="/projects">Projects</NavLink>
                <NavLink className={ ( {isActive} ) => isActive ? "navLink activeLink" : "navLink" } to="/contact">Contact</NavLink>
            </nav>
        );
    }

};

export default Navigation;