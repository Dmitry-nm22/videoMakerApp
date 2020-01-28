import React from 'react';
import s from './Video.module.css';







function VideoPortfolio() {
    return (
        <div className={s.video}>
            <a href="#" className={s.button}><i className="fa fa-play fa-2x"></i></a>
            {/*<button className={s.button}></button>*/}
        </div>
    );
}

export default VideoPortfolio;