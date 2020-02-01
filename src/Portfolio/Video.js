import React from 'react';
import s from './Video.module.css';
import Popup from "reactjs-popup";



class VideoPortfolio extends React.Component {

    // state={
    //     visibleVideo: false
    // }
    //
    // changeVisibleVideo =() =>{
    //     this.setState({
    //         visibleVideo: !this.state.visibleVideo
    //     })
    // }

// {/*{this.state.visibleVideo &&*/}
// {/*<div   className={s.video}>*/}
//
// {/*</div>}*/}

    render(){
        return (
            <div className={s.wraper} >
                <Popup trigger={<div href='#' onClick={this.changeVisibleVideo}  className={s.button}><i className="fa fa-play fa-2x"></i></div> } className={s.Popup}>
                    <div className={s.video}>Popup content here !!</div>
                </Popup>


            </div>
        );
    }

}

export default VideoPortfolio;