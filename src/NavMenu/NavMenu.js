import React from 'react';
import styles from './NavMenu.module.css';
import logo from '../img/logo.png';
import { Link } from "react-scroll";



function NavMenu() {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.header__inner}>
                    <div className={styles.header__logo}>
                        <img src={logo} alt="logo"/>
                    </div>

                    <div className={styles.nav}>
                        <Link
                            className={styles.nav__link}
                            activeClass="active"
                            to="portfolio"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration= {1000}
                        >
                            ПОРТФОЛИО
                        </Link>
                        <Link
                            className={styles.nav__link}
                            activeClass="active"
                            to="services"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration= {1000}
                        >
                            УСЛУГИ
                        </Link>


                        <a className={styles.nav__link} href="/#partners">НАШИ ПАРТНЕРЫ</a>
                        <a className={styles.nav__link} href="/#contact">КОНТАКТЫ</a>
                        <a className={styles.nav__link} href="/#about">О НАС</a>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default NavMenu;
