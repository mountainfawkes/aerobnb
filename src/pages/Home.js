import React from 'react';
import Anywhere from './../components/Anywhere';
import Header from './../components/Header';
import Navbar from './../components/Navbar';
import Nearby from './../components/Nearby';
import Wishlist from './../components/Wishlist';
import Discover from './../components/Discover';
import Recruitment from './../components/Recruitment';
import Footer from './../components/Footer';

function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <Nearby />
      <Anywhere />
      <Wishlist />
      <Discover />
      <Recruitment />
      <Footer />
    </>
  );
}

export default Home;
