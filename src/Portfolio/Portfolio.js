import React from 'react';
import s from './Portfolio.module.css';






function Portfolio() {
    return (
        <div className={s.wraper} >
            <iframe title="vimeo-player" src="https://player.vimeo.com/video/196745520" width="50%" height="360"
                    frameBorder="0" allowFullScreen>
            </iframe>

            <iframe src="https://player.vimeo.com/video/381523435?color=56bdbd&title=0&byline=0&portrait=0" width="50%"
                    height="360" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen>
            </iframe>

        </div>
    );
}

export default Portfolio;