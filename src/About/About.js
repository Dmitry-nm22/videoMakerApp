import React from 'react';
import s from './About.module.css'
import Advantages from "./Advantages";

// IMG
import videoImg from "../img/video.png";
import walletImg from "../img/wallet.png";
import checkListImg from "../img/checklist.png";


const firstText = 'Выполним любой по сложности видеопроект от создания оригинального сценария до монтажа,цветокоррекции и саунд дизайна.'
const secondText='Обеспечиваем высокое качество видеопродукта по доступной цене. У нас прозрачная смета, без скрытых платежей.'
const thirdText='Заключаем официальный договор. Согласование на каждом этапе работы. Оплата после того как увидите результат'




function About() {
    return (
        <div>
            <div className={s.wraper}>
                <p className={s.p}>О НАС</p>
                <h1 className={s.h1}>Мы делаем профессиональное видео для вашей кампании</h1>
                <div className={s.advantages}>
                    <Advantages img={videoImg} title={'под ключ'} text={firstText}/>
                    <Advantages img={walletImg} title={'стоимость'} text={secondText}/>
                    <Advantages img={checkListImg} title={'гарантии'} text={thirdText}/>
                </div>
            </div>

        </div>
    );
}

export default About;
