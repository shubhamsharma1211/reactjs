import logo from './logo.svg';
import './App.css';
import Banner from './component/banner';
import Nav from './component/nav';
import React from 'react';
import Hero from './component/hero-section';

function App() {
  return (
    <React.Fragment> 
      <Nav/>
      <Banner/>
      <Hero/>
      </React.Fragment>
  );
}

export default App;
