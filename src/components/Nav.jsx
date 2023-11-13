import React from 'react';
import {Link, NavLink} from "react-router-dom";

const Nav = () => {
    return (
        <>
            <nav>
                <p className="logo">
                    <Link to="/">Supakar</Link>
                </p>
                <ul>
                    <li><NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>Accueil</NavLink></li>
                    <li>Vehicules</li>
                    <li><NavLink to="/customizer" className={({ isActive }) => (isActive ? 'active' : '')}>Customizer</NavLink></li>
                    <li>Visite</li>
                </ul>
            </nav>
        </>
    );
};

export default Nav;