import React from 'react';
import s from './SocialNetworks.module.css'
import SocialNetwork from "./SocialNetwork";



const bcColorInst = {
    backgroundColor: 'gray',
};

const bcColorVimeo = {
    backgroundColor: '#f72630',
};

const bcColorFacebook = {
    backgroundColor:  '#f72630',
};

const changeClass = () =>{
    bcColorFacebook.backgroundColor = '#f72630'
}

function SocialNetworks() {
    return (
        <div className={s.wraper}>
            <SocialNetwork className={'fab fa-facebook-f'}/>
            <SocialNetwork className={'fab fa-vimeo-v'} />
            <SocialNetwork className={'fab fa-instagram'} />
        </div>
    );
}

export default SocialNetworks;
