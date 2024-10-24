// src/App.js
import React from 'react';
import Header from '../Home/components/Header';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import CoreValues from './components/CoreValues';
import Team from './components/Team';
import Footer from '../Home/components/Footer';


const App = () => {
  return (
    <div className="App">
      <Header />
      <Hero />
      <AboutUs />
      <CoreValues />
      <Team />
      <Footer/>
    </div>
  );
};

export default App;
