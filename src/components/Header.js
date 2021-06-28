import React from 'react';
import Hero from './Hero';
import HeroImg from './../images/hero.webp';
import Navbar from './Navbar';

function Header() {
  return (
    <>
      <Navbar />
      <div style={{ position: 'relative' }} >
        <div style={{ position: 'absolute', top: '0', left: '0' }}>
          <img
            src={HeroImg}
            alt='people camping on a lake'
            style={{ backgroundSize: 'cover', maxWidth: '100vw' }}
          />
        </div>
        <div style={{ position: 'relative' }}>
          <Hero />
          <h1>Header</h1>
        </div>
      </div>
    </>
  )
}

export default Header;
