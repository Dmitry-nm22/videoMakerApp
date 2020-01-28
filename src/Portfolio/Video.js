import React from 'react';
import s from './Video.module.css';



class VideoPortfolio extends React.Component {

    state={
        visibleVideo: false
    }

    changeVisibleVideo =() =>{
        this.setState({
            visibleVideo: !this.state.visibleVideo
        })
    }

    changeForOnBlur =() =>{
        this.setState({
            visibleVideo: false
        })
    }

    render(){
        return (
            <div className={s.wraper} >
                <div href='#' onClick={this.changeVisibleVideo}  className={s.button}><i className="fa fa-play fa-2x"></i>
                    {this.state.visibleVideo &&
                    <div  onBlur={this.changeForOnBlur} className={s.video}>

                    </div>}
                </div>

            </div>
        );
    }

}

export default VideoPortfolio;