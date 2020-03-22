import React from 'react';
import s from './Footer.module.css'
import logo from '../img/logo.png'
import Popover from "@material-ui/core/Popover";



function Footer(props) {
    return (
            <div className={s.inner} >
                <img src={logo} alt="LOGO"/>
                <div className={s.text}>
                    <h5>VoronkoFilms Видеопродакшн студия  </h5>
                    <span>Все права защищены</span>
                </div>
            </div>
    );
}
export default Footer;
