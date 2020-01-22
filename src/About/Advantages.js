import React from 'react';
import s from './Advantages.module.css'



function Advantages(props) {
    return (
        <div className={s.wraper}>
            <div  className={s.circle}>
                <img className={s.img} src={props.img} alt="photo"/>
            </div>
            <h3>{props.title}</h3>
            <p>{props.text}</p>
        </div>
    );
}

export default Advantages;
