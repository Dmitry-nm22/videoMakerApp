import React from 'react';
import s from './Portfolio.module.css';
import img from '../img/Безымянный.png';






function Portfolio() {
    return (
        <div className={s.wraper} >
            <h1>Портфолио</h1>
            <p>Каждый проект важен для нас</p>
            <div className={s.inner}>
                <div className={s.video}>

                </div>
                <div className={s.video}></div>
            </div>




            {/*<iframe src="https://player.vimeo.com/video/381523435?color=56bdbd&title=0&byline=0&portrait=0" width="50%"*/}
            {/*        height="360" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen>*/}
            {/*</iframe>*/}

        </div>
    );
}

export default Portfolio;