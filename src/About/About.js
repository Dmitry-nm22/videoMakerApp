import React from 'react';
import s from './About.module.css'
import MeImg from '../img/Me.jpg'


function About() {
    return (
        <div className={s.wraper}>
            <div>
                <h4 className={s.about}>О НАС</h4>
            </div>
            <div>
                <img src={MeImg} className={s.img}/>
                <p></p>
            </div>
            <div className={s.text}>
                <span>
                    Здравствуйте и добро пожаловать в HayotFilms.
                        <br/>
                    Меня зовут Воронско Станислав, и я являюсь основателем и главным видеографом VoronkoFilms - это видеостудия в Праге.<br/>
                    В нашу команду входят талантливые видеооператоры, сценаристы, осветители, визажисты, продюсеры, ассистенты и многие другие.
                    HayotFilms работает над фильмами, корпоративными видео, рекламными роликами и другими видео-проектами. Все наши сотрудники -
                    настоящие проффесионалы своего дела! <br/>
                    Если вам нужен видеограф в Праге или целая съёмочная группа с оборудованием в другой европейской стране, обратитесь к нам.
                </span>
            </div>

        </div>
    );
}

export default About;
