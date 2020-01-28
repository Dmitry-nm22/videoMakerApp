import React from 'react';
import s from './Video.module.css';







function VideoPortfolio() {
    return (
        <div className={s.video}>
            <a href={
                <iframe width="560" height="315" src="https://www.youtube.com/embed/ytwnojqOwWg" frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                </iframe>
            } className={s.button}><i className="fa fa-play fa-2x"></i></a>
            {/*<button className={s.button}></button>*/}
        </div>
    );
}

export default VideoPortfolio;