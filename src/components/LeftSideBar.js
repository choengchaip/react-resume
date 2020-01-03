import React, {Component} from 'react';
import './css/LeftSideBar.css';
import homeLogo from './../assets/home.svg';
import aboutLogo from './../assets/information.svg';
import projectLogo from './../assets/project.svg';

class LeftSideBar extends Component {

    onMouseOver = (e, index) => {
        document.getElementsByClassName('toolbox-items')[index].classList.add('active');
    }

    onMouseLeave = (e, index) => {
        document.getElementsByClassName('toolbox-items')[index].classList.remove('active');
        document.getElementsByClassName('toolbox-items')[index].classList.add('inactive');
    }

    pageProcess = async(e,id) => {
        this.props.pageChange();
        await this.sleep();
        let target = document.getElementById(id)
        target.scrollIntoView();
    }

    sleep = async() => new Promise(resolve => setTimeout(resolve, 1000));

    render() {
        return (
            <div className={"singh-side-bar-container"}>
                <div onClick={e=>this.pageProcess(e,'homepage')} onMouseLeave={e=>this.onMouseLeave(e,0)} onMouseEnter={e=>this.onMouseOver(e,0)}  className={'singh-side-bar-items clickable'}>
                    <img src={homeLogo} alt={'Home'}/>
                    <div className={'toolbox-items inactive'}>
                        <span>Home</span>
                    </div>
                </div>
                <div onClick={e=>this.pageProcess(e,'aboutpage')} onMouseLeave={e=>this.onMouseLeave(e,1)} onMouseEnter={e=>this.onMouseOver(e,1)} className={'singh-side-bar-items clickable'}>
                    <img src={aboutLogo} alt={'Home'}/>
                    <div className={'toolbox-items idle inactive'}>
                        <span>About</span>
                    </div>
                </div>
                <div onClick={e=>this.pageProcess(e,'projectpage')} onMouseLeave={e=>this.onMouseLeave(e,2)} onMouseEnter={e=>this.onMouseOver(e,2)} className={'singh-side-bar-items clickable'}>
                    <img src={projectLogo} alt={'Home'}/>
                    <div className={'toolbox-items idle inactive'}>
                        <span>Project</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default LeftSideBar;