import React from 'react';
import './App.css';

import Main from "./Main/Main";
import NavMenu from "./NavMenu/NavMenu";
import Services from "./Services/Services";
import Portfolio from "./Portfolio/Portfolio";
import Order from "./Order/Order";
import Contact from "./Contact/Contact";
import SocialNetworks from "./SocialNetworks/SocialNetworks";
import Footer from "./Footer/Footer";
import About from "./About/About";






function App() {
  return (
      <div className="App">
         <NavMenu/>
          <Main/>
          <Services/>
          <Portfolio/>
          <Order/>
          <Contact/>
          <SocialNetworks/>
          <Footer/>
          <About/>
      </div>
  );
}

export default App;
