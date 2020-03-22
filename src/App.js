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
import {BrowserRouter, Route} from "react-router-dom";
import About from "./About/About";



function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <div>
                    <Route exact path='/' render={() => <NavMenu/>}/>
                    <Route exact path='/' render={() => <Main/>}/>
                    <Route exact path='/' render={() => <About/>}/>
                    <Route exact path='/' render={() => <Services/>}/>
                    <Route exact path='/' render={() => <Portfolio/>}/>
                    <Route exact path='/' render={() => <Order/>}/>
                    <Route exact path='/' render={() => <Contact/>}/>
                    <Route exact path='/' render={() => <SocialNetworks/>}/>
                    <Route exact path='/' render={() => <Footer/>}/>

                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
