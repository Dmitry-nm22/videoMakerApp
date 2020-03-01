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
import Price from "./Price/Price";
import {BrowserRouter, Route} from "react-router-dom";







function App() {
  return (
      <BrowserRouter>
          <div className="App">
              <div>
                  <Route path='/price' render={() => <Price/> }/>
                  <Route path='/main' render={() => <NavMenu/> }/>
                  <Route path='/main' render={() => <Main/> }/>
                  <Route path='/main' render={() => <Services/> }/>
                  <Route path='/main' render={() => <Portfolio/> }/>
                  <Route path='/main' render={() => <Order/> }/>
                  <Route path='/main' render={() => <Contact/> }/>
                  <Route path='/main' render={() => <SocialNetworks/> }/>
                  <Route path='/main' render={() => <Footer/> }/>
              </div>
          </div>
      </BrowserRouter>

  );
}

export default App;
