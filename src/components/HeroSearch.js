import React from 'react';

function HeroSearch() {
  return (
    <>
      <label>Location</label>
        <input type='text'></input>
      <label>Check in</label>
        <input type='text'></input>
      <label>Check out</label>
        <input type='text'></input>
      <label>Guests</label>
        <input type='text'></input>
      <button type='submit'>Search</button>
    </>
  )
}

export default HeroSearch;