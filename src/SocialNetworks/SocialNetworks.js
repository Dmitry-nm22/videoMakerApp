import React from 'react';
import s from './SocialNetworks.module.css'
import SocialNetwork from "./SocialNetwork";



const bcColorInst = {
    backgroundColor: '#f72630',
};

const bcColorVimeo = {
    backgroundColor: '#f72630',
};

const bcColorFacebook = {
    backgroundColor: '#f72630',
};


function SocialNetworks() {
    return (
        <div className={s.wraper}>
            <SocialNetwork className={'fab fa-facebook-f'} style={bcColorFacebook}/>
            <SocialNetwork className={'fab fa-vimeo-v'} style={bcColorVimeo}/>
            <SocialNetwork className={'fab fa-instagram'} style={bcColorInst}/>
        </div>
    );
}

export default SocialNetworks;
