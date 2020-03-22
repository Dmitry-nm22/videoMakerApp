import React from 'react';
import s from './Order.module.css'
import {Link} from "react-scroll";
import styles from "../NavMenu/NavMenu.module.css";






function Order() {
    return (
        <div className={s.wraper}>
            <h1>Закажите лучший видеоролик!</h1>
            <Link
                className={styles.nav__link}
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={0}
                duration={1000}
            >
                <button>получить консультацию</button>
            </Link>

        </div>
    )

}

export default Order;
