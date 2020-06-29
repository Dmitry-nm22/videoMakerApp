import React, {Component} from 'react';
import s from './Portfolio.module.css';
import VideoPortfolio from "./Video";



//id video
const idVelo = 'NGICM5uhRbQ'
const idSlavyanka = 'LXl2efww0ag'
const idSlavyankaautum = '6d3sDYNSu-g'
const idIstore = 'pVt6WQ7erx8'
const idInglot = 'TsVsiHXM-24'
const idBelshina = 'u-jB2XsbBp4'
const idAlfaBank = 'lJrWdoYkbSA'
const idUnderArmor = 'LHkARTCmL-4'
const idMaxKorzh = 'zmBvQHvCrKw'
const idTraipl = 'RGJjXeq6Azg'


class Portfolio extends Component {

    state = {
        isOpen: false,
        titleOpen: 'смотреть все',
        titleClose: 'свернуть'
    }


    changeView = () =>{
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {

        let title = this.state.isOpen ? this.state.titleClose  :  this.state.titleOpen

        return (
            <div className={s.wraper} id="portfolio">
                <h1>Портфолио</h1>
                <p>Каждый проект важен для нас</p>
                <div className={s.inner}>
                    <VideoPortfolio id={idVelo}/>
                    <VideoPortfolio id={idSlavyanka}/>
                </div>
                <div className={s.inner}>
                    <VideoPortfolio id={idSlavyankaautum}/>
                    <VideoPortfolio id={idIstore}/>
                </div>
                { this.state.isOpen &&
                  <div>
                      <div className={s.inner}>
                          <VideoPortfolio id={idInglot}/>
                          <VideoPortfolio id={idBelshina}/>
                      </div>
                      <div className={s.inner}>
                          <VideoPortfolio id={idAlfaBank}/>
                          <VideoPortfolio id={idUnderArmor}/>
                      </div>
                      <div className={s.inner}>
                          <VideoPortfolio id={idMaxKorzh}/>
                          <VideoPortfolio id={idTraipl}/>
                      </div>
                  </div>
                }
                    <button className={s.button} onClick={this.changeView}>{title}</button>
            </div>
        );
    }
}

export default Portfolio;