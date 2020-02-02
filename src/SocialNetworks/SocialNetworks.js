import React from 'react';
import s from './SocialNetworks.module.css'





function SocialNetworks() {
    return (
        <div className={s.wraper}>
            <div className={s.inner}>
                <a href=""><i className="fab fa-facebook-f"></i></a>
                <a href=""><i className="fab fa-vimeo-v"></i></a>
                <a href=""><i className="fab fa-instagram"></i></a>
            </div>
        </div>

    );
}

export default SocialNetworks;
