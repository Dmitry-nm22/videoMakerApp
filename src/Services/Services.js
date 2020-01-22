import React from 'react';
import s from './Services.module.css';
import Servic from "./Servic";




function Services() {
    return (
        <div className={s.wraper}>
                <h1>НАШИ УСЛУГИ</h1>
                <p>Вам нужны услуги видеографа в Праге или в целом в Европе? Наша команда удовлетворит любые ваши потребности</p>
            <div className={s.inner}>
                <Servic/>
                <Servic/>
                <Servic/>
            </div>
            <div className={s.inner}>
                <Servic/>
                <Servic/>
                <Servic/>
            </div>
        </div>
    );
}

export default Services;