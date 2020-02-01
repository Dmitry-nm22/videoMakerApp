import React from 'react';
import './App.css';

import Main from "./Main/Main";
import Partners from "./Partners/Partners";
import NavMenu from "./NavMenu/NavMenu";
import Services from "./Services/Services";
import Portfolio from "./Portfolio/Portfolio";
import Tests from "./Testss";




function App() {
  return (
      <div className="App">
         <NavMenu/>
          <Main/>
          <Services/>
          {/*<About/>*/}
          {/*<Partners/>*/}
          <Portfolio/>
          <Tests/>

      </div>
  );
}

export default App;
