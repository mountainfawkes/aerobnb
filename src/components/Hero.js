import React from 'react';
import HeroImg from './../images/hero.webp';
import HeroSearch from './HeroSearch';

function Hero() {
  return (
    <>
      <div style={{ position: 'absolute', top: '0', left: '0' }}>
        <img
          src={HeroImg}
          alt='people camping on a lake'
          style={{ backgroundSize: 'cover', width: '100vw' }}
        />
      </div>
      <div style={{ position: 'relative' }}>
        <HeroSearch />
        <h1>Welcome</h1>
      </div>
    </>
  )
}

export default Hero;