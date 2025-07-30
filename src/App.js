import React from 'react'
import Header from './components/header/Header'
import Hero from "./components/hero/Hero";
import About from './components/about/About';
import Awards from './components/awards/Awards';
import Client from './components/client/Client';
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Awards />
      <Client />
      <Footer />
    </div>
  );
}

export default App
