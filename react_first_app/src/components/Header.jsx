import React from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../contexts/themeContext';
import LightModeIcon from '@mui/icons-material/LightMode';
import Nightlight from '@mui/icons-material/Nightlight';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const {theme, toggleTheme} = useContext(ThemeContext)
    return (
        <header className= {`theme-${theme}`}>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/todo">ToDo</NavLink>
                <NavLink to="/products">Products</NavLink>
                <NavLink to="/users">Users</NavLink>
            </nav>
            
            <div onClick={toggleTheme}>
                {theme === "light" ? <LightModeIcon /> : <Nightlight/>}
            </div>
        </header>
    );
}

export default Header;
