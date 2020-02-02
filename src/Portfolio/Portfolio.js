import React from 'react';
import s from './Portfolio.module.css';
import VideoPortfolio from "./Video";

//img
import imgInglot from '../img/inglot.jpg';
import imgSlavyanka from '../img/slavyanka.jpg';
import imgLove from '../img/love.jpg';
import imgFactory from '../img/factory.png';


//id's videos from vimeo.com
const idInglot = '360987855'
const idSlavyanka = '381523435'
const idLove = '360752193'
const idFactory = '381523553'

//styles for backgrouimg
const bcInglot = {
    backgroundImage: 'url(' + imgInglot + ')',
};
const bcSlavyanka = {
    backgroundImage: 'url(' + imgSlavyanka + ')',
};
const bcLove = {
    backgroundImage: 'url(' + imgLove + ')',
};
const bcFactory = {
    backgroundImage: 'url(' + imgFactory + ')',
};


function Portfolio() {
    return (
        <div className={s.wraper} id="portfolio">
            <h1>Портфолио</h1>
            <p>Каждый проект важен для нас</p>
            <div className={s.inner}>
                <VideoPortfolio style={bcInglot} id={idInglot} />
                <VideoPortfolio style={bcSlavyanka} id={idSlavyanka} />
            </div>
            <div className={s.inner}>
                <VideoPortfolio style={bcLove} id={idLove} />
                <VideoPortfolio style={bcFactory} id={idFactory} />
            </div>
        </div>
    );
}

export default Portfolio;