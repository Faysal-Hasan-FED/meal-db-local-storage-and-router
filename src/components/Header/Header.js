import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <nav className='header'>
            <NavLink to="/home"
    style={({ isActive }) => ({
    color: isActive ? 'red' : 'white',
    marginRight: isActive ? '25px' : '25px',
    textDecoration: isActive? 'none' : 'none',
    fontWeight: isActive ? 'bold' : 'normal'})}>Home </NavLink>

            <NavLink to="/meals"
    style={({ isActive }) => ({
    color: isActive ? 'red' : 'white',
    marginRight: isActive ? '25px' : '25px',
    textDecoration: isActive? 'none' : 'none',
    fontWeight: isActive ? 'bold' : 'normal'})}>Meals </NavLink>

            <NavLink to="/about"
    style={({ isActive }) => ({
    color: isActive ? 'red' : 'white',
    marginRight: isActive ? '25px' : '25px',
    textDecoration: isActive? 'none' : 'none',
    fontWeight: isActive ? 'bold' : 'normal'})}>About </NavLink>
        </nav>
    );
};

export default Header;