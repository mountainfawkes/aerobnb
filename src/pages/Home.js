import React from 'react';
import Anywhere from './../components/Anywhere';
import Header from './../components/Header';
import Navbar from './../components/Navbar';
import Nearby from './../components/Nearby';

function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <Nearby />
      <Anywhere />
    </>
  );
}

export default Home;
