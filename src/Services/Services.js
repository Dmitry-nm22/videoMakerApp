import React from 'react';
import s from './Services.module.css';
import Servic from "./Servic";

//img
import wedding from "../img/wedding.jpg";
import video from '../img/service1.jpg';
import interview from "../img/interview.jpg";
import ivent from "../img/ivent.jpg";
import clip from "../img/clip.jpg";
import marketing from "../img/marketing.jpg";
import {Link} from "react-scroll";
import styles from "../NavMenu/NavMenu.module.css";


//title
const titleOne ='Видео-рекламы'
const titleTwo ='Корпоративные видео'
const titleThree ='Мероприятий и конференций'
const titleFour ='Съёмка видеоклипов'
const titleFive ='Свадебные видео в Праге'
const titleSix ='Маркетинговые видео'

const textOne = 'Мы поможем вашему бизнесу стартовать: профессиональная видеосъёмка красивых рекламных и промо роликов,' +
                'благодаря которым о вашем бренде или товаре узнают многие.'


const textTwo = 'Мы занимаемся съёмкой профессиональных корпоративных видео о вашей фирме,' +
                ' об услугах и товарах, которые вы предлагаете. ' +
                'Мы работали над видеороликами для топовых кампаний. Готовы оставить превосходное впечатление?'

const textThree = 'Если ваш выездной корпоративный семинар, деловую встречу,' +
                  ' конференцию  или что-то ещё записать на видео, ' +
                  'такой ролик может стать эффективным инструментом для обучения или хорошим промо роликом.'


const textFour ='Вам нужен клипмейкер?'  +
                ' Мы предоставим вам всё необходимое для создания красивого, современного,' +
                ' музыкального клипа, который будет вам по средствам и станет отражением вашего мировоззрения.'



const textFive ='Пусть этот день запомнится надолго! Наш  оператор  справится со всей беготнёй и съёмками,' +
                ' а вы получите превосходное  видео  без лишних волнений.' +
                ' Посмотрите наше  портфолио со свадебными видео и позвольте нам запечатлеть ваш особенный день'

const textSix ='Мы создадим видео-рекламу вашего товара  или информационное видео о вашем сервисе,' +
               ' которое поможет продавать вашу продукцию и увеличит прибыль. ' +
               'В современном деловом мире качественное видео - это мощный инструмент. Мы приведём вас к успеху!'



function Services() {
    return (
        <div className={s.wraper} id='services'>
                <h1>НАШИ УСЛУГИ</h1>
                <p>Вам нужны услуги видеографа ? Наша команда удовлетворит любые ваши потребности</p>
            <div className={s.inner}>
                <Servic title={titleOne} text={textOne} img={video} />
                <Servic title={titleTwo} text={textTwo} img={interview}/>
                <Servic title={titleThree} text={textThree} img={ivent}/>
            </div>
            <div className={s.innerTwo}>
                <Servic title={titleFour} text={textFour} img={clip}/>
                <Servic title={titleFive} text={textFive} img={wedding}/>
                <Servic title={titleSix} text={textSix} img={marketing}/>
            </div>
            <Link

                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={0}
                duration={1000}
            >
                <button>Свяжитесь с нами</button>
            </Link>

        </div>
    );
}

export default Services;