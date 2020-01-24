import React from 'react';
import s from './Servic.module.css';





function Servic(props) {
    return (
        <div className={s.wraper} >
            <div className={s.img}>
                <img src={props.img} alt="logo"/>
            </div>

            <div className={s.inner} style={props.style}>
                <h1>{props.title}</h1>
                <p>{props.text}</p>
                <button>Узнать точную цену</button>
            </div>
        </div>
    );
}

export default Servic;