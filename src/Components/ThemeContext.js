import React, { createContext, useContext, useState, useEffect } from 'react';


const ThemeContext = createContext();


export function useTheme() {
  return useContext(ThemeContext);
}


export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light'); 

  useEffect(() => {
    
    document.body.className = theme;
  }, [theme]);

  
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}