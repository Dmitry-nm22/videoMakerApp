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
                    <h1 className={s.intro__title}>ВИДЕОПРОДАКШН СТУДИЯ </h1>
                    <h2 className={s.intro__titleTwo}> В ПРАГЕ</h2>
                    <button className={s.button}> смотреть портфолио</button>
                </div>
            </div>
        </div>
    );
}

export default Main;
