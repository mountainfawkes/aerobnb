import React from 'react';
import Hero from './Hero';
import HeroImg from './../images/hero.webp';
import Navbar from './Navbar';

function Header() {
  return (
    <>
      <Navbar />
      <div style={{ position: 'relative', display: 'block' }} >
        <img
          src={HeroImg}
          alt='people camping on a lake'
          style={{ backgroundSize: 'cover', maxWidth: '100vw', position: 'absolute', top: '0', left: '0' }}
        />
        <Hero />
      </div>
      <div style={{ position: 'relative', display: 'block' }} ></div>
      <h1 style={{ position: 'relative' }} >Header</h1>
    </>
  )
}

export default Header;
