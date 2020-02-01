import React from 'react';
import s from './Portfolio.module.css';
import VideoPortfolio from "./Video";

//img
import bcInglot from '../img/inglot.jpg';



//id's videos from vimeo.com
const idInglot = '360987855'

function Portfolio() {
    return (
        <div className={s.wraper} id="portfolio">
            <h1>Портфолио</h1>
            <p>Каждый проект важен для нас</p>
            <div className={s.inner}>
                <VideoPortfolio img={bcInglot} id={idInglot}/>
                {/*<VideoPortfolio/>*/}
            </div>
        </div>
    );
}

export default Portfolio;