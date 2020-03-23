import React from 'react';
import styles from './NavMenu.module.css';
import logo from '../img/logo.png';
import { Link } from "react-scroll";
import NavMenuMobile from "./NavMenuMobile";



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
                                duration={1000}
                            >
                                ПОРТФОЛИО
                            </Link>
                            <Link
                                className={styles.nav__link}
                                activeClass="active"
                                to="About"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={1000}
                            >
                                ОБО МНЕ
                            </Link>
                            <Link
                                className={styles.nav__link}
                                activeClass="active"
                                to="services"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={1000}
                            >
                                УСЛУГИ
                            </Link>
                            <Link
                                className={styles.nav__link}
                                activeClass="active"
                                to="contact"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={1000}
                            >
                                КОНТАКТЫ
                            </Link>
                    </div>
                </div>
            </div>
            <div className={styles.mobile}>
                <NavMenuMobile/>
            </div>
        </header>
    );
}

export default NavMenu;
