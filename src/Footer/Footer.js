import React from 'react';
import s from './Footer.module.css'
import logo from '../img/logo.png'



function Footer(props) {
    return (
            <div className={s.inner} >
                <img src={logo} alt="LOGO"/>
                <div className={s.text}>
                    <h5>VoronkoFilms Видеопродакшн студия в Праге, Чехия </h5>
                    <span>Все права защищены</span>
                </div>

            </div>

    );
}

export default Footer;
