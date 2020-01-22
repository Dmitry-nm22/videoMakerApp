import React from 'react';
import s from './Main.module.css'
import video from '../video/video.mp4'




function Main() {
    return (
        <div className={s.intro}>
            <div className={s.video}>
                <video className={s.video__media} src={video} autoPlay={true} muted={true} loop={true}></video>
            </div>
            <div className={s.intro__content}>
                <div className={s.container}>
                    <h1 className={s.intro__title}>Производство рекламных роликов, презентационных и имиджевых фильмов</h1>
                </div>
            </div>
        </div>
    );
}

export default Main;
