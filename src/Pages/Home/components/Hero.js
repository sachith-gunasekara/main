import React from 'react';
import './Hero.css'; 

function Hero() {
  return (
    <section className="Sect">
      <img src="/img with blur.png" alt="Curtain" className="Sect-img" />
      <div className="Sect-text">
        <img src="/pic1.png" alt="Curtain" className="logo" />
        <h1>Elevate Your Brand</h1>
        <p>Glorius Textile has been the go-to company since the 80's.</p>
        <a href="#" className="button">Realize Your Vision</a>
      </div>
    </section>
  );
}

export default Hero;
