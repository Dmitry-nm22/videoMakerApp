import React from 'react';
import s from './About.module.css'
import img from '../img/Mee.jpg'


function About() {
    return (
        <div className={s.wraper} id={'About'}>
            <div className={s.title}>
                <div className={s.line}></div>
                <h2>Обо мне</h2>
            </div>
            <div className={s.img}>
                <img src={img} alt=""/>
                <h5 className={s.imgDescription}>
                    Станислав Воронко
                </h5>
                <h6 className={s.imgDescription}>
                     Видеограф
                </h6>
            </div>
            <div>
                <div className={s.decription}>
                    Здравствуйте и добро пожаловать в HayotFilms. Меня зовут Станислав Воронко,
                    и я являюсь основателем и главным видеографом VoronkoFilms.<br/>
                </div>
                <div className={s.decription}>
                    VoronkoFilms – это компания, сочетающая в своей работе творческое начало, отработанный годами профессионализм и бесспорное качество.
                    Наша студия предлагает широкий спектр услуг – у нас Вы можете заказать видеоролик для самых разных проектов.<br/>
                </div>
                <div className={s.decription}>
                    Мы работаем над фильмами, корпоративными видео, рекламными роликами и другими видео-проектами. Все наши сотрудники -
                    настоящие профессионалы, и если вам нужен видеоограф, то смело обращайтесь к нам!
                </div>
            </div>
        </div>
    );
}

export default About;
