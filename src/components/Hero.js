import React from 'react';
import HeroImg from './../images/hero.webp';
import HeroSearch from './HeroSearch';

function Hero() {
  return (
    <div style={{ position: 'relative' }}>
      <img
        src={HeroImg}
        alt='people camping on a lake'
        style={{ display: 'block', width: '100%', height: 'auto' }}
      />
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, width: '100%' }}>
        <HeroSearch />
        <h1 style={{ marginTop: '60px'}} >Welcome to AeroBnB!</h1>
      </div>
    </div>
  )
}

export default Hero;