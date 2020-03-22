import React from 'react';
import s from './Video.module.css';
import './Style.scss'


// className={`${styles.item} ${styles.active}`}

// www.youtube.com/embed/NGICM5uhRbQ
function VideoPortfolio(props) {
    return (
        <body className={s.wraper}>
        <iframe src={`https:/www.youtube.com/embed/${props.id}?title=0&byline=0&portrait=0`} width="100%" height="100%"
                frameBorder="0" allow="autoplay; fullscreen" allowFullScreen/>
        </body>
    );
}

export default VideoPortfolio;