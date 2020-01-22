import React from 'react';
import './App.css';
import Main from "./Main/Main";
import About from "./About/About";
import Partners from "./Partners/Partners";
import NavMenu from "./NavMenu/NavMenu";
import Services from "./Services/Services";



function App() {
  return (
      <div className="App">
          <NavMenu/>
          <Main/>
          <Services/>
          <About/>
          <Partners/>
      </div>
  );
}

export default App;
