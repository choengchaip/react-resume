import React, {Component} from 'react';
import './css/AboutPage.css';
import github from './../assets/github.svg';
import facebook from './../assets/facebook.svg';
import instragram from './../assets/ig.svg';
import twitter from './../assets/twitter.svg';

class AboutPage extends Component {
    render() {
        return (
            <div id={'aboutpage'} className={'about-container'}>
                <div className={'left-about-container'}>
                    <div className={'about-me-text-container'}>
                        <h1 id={'about-me-text'}>ABOUT ME</h1>
                        <div className={'about-me-detail'}>
                            <span>
                                <b style={{color: '#208420'}}>Hello, I’m Choengchai Phachonyut, </b><br/>
                                Junior Full Stack Developer based on Bangkok<br/>
                                I have rich experience in Frond-end & Back-end Tech.<br/>
                                Also I am good at VueJS, ReactJS,Angular , NodeJS, <br/>
                                PHP, RDBMS, NoSQL, Swift, Kotlin, Java. <br/>
                                Also Cloud Platform such as Google Cloud, Firebase.
                            </span>
                            <div className={'link-container'}>
                                <div className={'cv-items clickable'}>
                                    <span>Download CV</span>
                                </div>
                                <div className={'link-items clickable'}>
                                    <img src={github} align={''}/>
                                </div>
                                <div className={'link-items clickable'}>
                                    <img src={facebook} align={''}/>
                                </div>
                                <div className={'link-items clickable'}>
                                    <img src={instragram} align={''}/>
                                </div>
                                <div className={'link-items clickable'}>
                                    <img src={twitter} align={''}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"right-about-container"}>

                </div>
            </div>
        );
    }
}

export default AboutPage;