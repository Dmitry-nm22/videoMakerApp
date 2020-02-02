import React from 'react';
import s from './Video.module.css';
import ModalVideo from "react-modal-video";
import './Style.scss'




class VideoPortfolio extends React.Component {

    state={
        isOpen: false
    }


    openModal= () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }


    render(){
        return (
            <body className={s.wraper} style={this.props.style}>
                <div href='#'  onClick={this.openModal} className={s.button}><i className="fa fa-play fa-2x"></i>
                    <ModalVideo channel='vimeo' isOpen={this.state.isOpen} videoId={this.props.id}
                                onClose={this.openModal}
                    />
                </div>
            </body>
        );
    }

}

export default VideoPortfolio;