import React from 'react';
import s from './Servic.module.css';
import logo from '../img/service1.jpg';




function Servic() {
    return (
        <div className={s.wraper}>
            <img src={logo} alt="logo"/>
            <div className={s.inner}>
                <h1>Видео-рекламы</h1>
                <p>
                    Мы поможем вашему бизнесу стартовать: профессиональная видеосъёмка красивых рекламных и промо роликов,
                    благодаря которым о вашем бренде или товаре узнают многие.
                    Наши рекламные видео  набрают миллионные просмотры в социальных сетях.
                    Позвольте нам сделать то же и для вас!
                </p>
                <button>узнать точную цену</button>
            </div>
        </div>
    );
}

export default Servic;