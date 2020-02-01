import React from 'react';
import s from './Portfolio.module.css';
import VideoPortfolio from "./Video";

//img
import bcInglot from '../img/inglot.jpg';
import bcSlavyanka from '../img/slavyanka.jpg';
import bcLove from '../img/love.jpg';
import bcFactory from '../img/factory.jpg';


//id's videos from vimeo.com
const idInglot = '360987855'
const idSlavyanka = '381523435'
const idLove = '360752193'
const idFactory = '381523553'

function Portfolio() {
    return (
        <div className={s.wraper} id="portfolio">
            <h1>Портфолио</h1>
            <p>Каждый проект важен для нас</p>
            <div className={s.inner}>
                <VideoPortfolio img={bcInglot} id={idInglot} />
                <VideoPortfolio img={bcSlavyanka} id={idSlavyanka} />
            </div>
            <div className={s.inner}>
                <VideoPortfolio img={bcLove} id={idLove} />
                <VideoPortfolio img={bcFactory} id={idFactory} />
            </div>
        </div>
    );
}

export default Portfolio;