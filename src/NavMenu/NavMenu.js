import React from 'react';
import styles from './NavMenu.module.css';
import logo from '../img/logo.png';


function NavMenu() {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.header__inner}>
                    <div className={styles.header__logo}>
                        <img src={logo} alt="logo"/>
                    </div>

                    <nav className={styles.nav}>

                        <a className={styles.nav__link} href="/portfolio">ПОРТФОЛИО</a>
                        <a className={styles.nav__link} href="/services">УСЛУГИ</a>
                        <a className={styles.nav__link} href="/partners">НАШИ ПАРТНЕРЫ</a>
                        <a className={styles.nav__link} href="/contact">КОНТАКТЫ</a>
                        <a className={styles.nav__link} href="/about">О НАС</a>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default NavMenu;
