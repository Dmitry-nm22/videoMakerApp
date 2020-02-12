import React from 'react';
import s from './SocialNetworks.module.css'





function SocialNetwork(props) {
    return (
            <div className={s.inner} style={props.style}>
                <a href=""><i className={props.className}></i></a>
            </div>

    );
}

export default SocialNetwork;
