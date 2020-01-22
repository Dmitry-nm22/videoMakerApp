import React from 'react';
import './App.css';
import NavMenu from "./NavMenu/NavMenu";
import Main from "./Main/Main";
import About from "./About/About";
import Partners from "./Partners/Partners";



function App() {
  return (
      <div className="App">
          <NavMenu/>
          <Main/>
          <About/>
          <Partners/>
      </div>
  );
}

export default App;
