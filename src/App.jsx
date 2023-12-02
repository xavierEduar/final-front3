import React from 'react';
import {BrowserRouter as JaviRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Routes/Home';
import Favs from './Routes/Favs';
import Detail from './Routes/Detail';
import Contact from './Routes/Contact';
import { FavoritesProvider } from "./Routes/FavoritesContext"
import { ThemeProvider } from './Components/ThemeContext';


function App(){
  return (
    <JaviRouter className="App">
      <ThemeProvider>       
        <Navbar />
          <FavoritesProvider>
            <Routes>
              <Route path='/' element={<Home />}/>
              <Route path="/favs" element={<Favs />}/>
              <Route path="/dentist/:id" element={<Detail />}/>
              <Route path="/contacto" element={<Contact />}/>     
            </Routes>
          </FavoritesProvider>
        <Footer />
      </ThemeProvider>
    </JaviRouter>
   
  );
}

export default App;
