import React from 'react';
import styles from './NavMenu.module.css';


function NavMenu() {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.header__inner}>
                    <div className={styles.header__logo}><i className="fas fa-video"></i></div>

                    <nav className={styles.nav}>
                        <a className={styles.nav__link} href="/about">О НАС</a>
                        <a className={styles.nav__link} href="/portfolio">ПОРТФОЛИО</a>
                        <a className={styles.nav__link} href="/price">ЦЕНЫ</a>
                        <a className={styles.nav__link} href="/partners">НАШИ ПАРТНЕРЫ</a>
                        <a className={styles.nav__link} href="/contact">КОНТАКТЫ</a>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default NavMenu;
