import React from 'react'
import './Footer.css'
import { useTheme } from './ThemeContext';


const Footer = () => {

  const { theme} = useTheme(); 
  const navClasses = `nav ${theme === 'dark' ? 'dark-theme' : ''}`;
  
  return (
    <footer className={navClasses} >
        <p >Powered by</p>
        <img src="./images/DH.png" alt='DH-logo' />
    </footer>
  )
}

export default Footer
