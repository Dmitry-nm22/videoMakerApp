import React from 'react';
import s from './Servic.module.css';





function Servic(props) {
    return (
        <div className={s.wraper}>
            <div className={s.img}>
                <img src={props.img} alt="logo"/>
            </div>

            <div className={s.inner}>
                <h1>{props.title}</h1>
                <p>{props.text}</p>
                <div className={s.button}>
                    <a href="">
                        узнать точную цену
                        <span className={s.element}>></span>
                    </a>
                </div>

            </div>
        </div>
    );
}

export default Servic;