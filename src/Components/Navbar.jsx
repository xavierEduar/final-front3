import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css'
import { useTheme } from './ThemeContext';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const { theme, toggleTheme } = useTheme(); 

  const navClasses = `nav ${theme === 'dark' ? 'dark-theme' : ''}`;
  const buttonText = theme === 'dark' ? 'Tema Claro' : 'Tema Oscuro';


  return (
    <nav className={navClasses}>
      <div className='nav-start'>
      <img src="./images/DH.png" alt='DH-logo' />

      <ul>
        <li>
          <Link to='/' className={navClasses}>Home</Link>
        </li>
        <li> 
          <Link to='/contacto' className={navClasses}>Contacto</Link>
        </li>
        {/* <li>
          <Link to='/dentist/:id'>Detalle</Link>
        </li> */}
        <li>
          <Link to='/favs' className={navClasses}>Favoritos</Link>
        </li>
      </ul>
      </div>

      <button onClick={toggleTheme} className={navClasses}>{buttonText}</button>

    </nav>
  )
}

export default Navbar