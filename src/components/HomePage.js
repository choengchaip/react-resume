import React, {Component} from 'react';
import './css/HomePage.css';

class HomePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            textString: [
              ` Junior Full Stack Developer`,
              ` VueJS Developer`,
              ` ReactJS Developer`,
              ` Flutter Developer`,
              ` NodeJS Developer`
            ],
            currentText: 0
        }
    }

    componentDidMount() {
        this.loopingType();
    }

    loopingType = async() => {
        let i=0;
        while(true){
            await this.typingText(i%5).then(e=>this.undoingText(i%5));
            i++;
        }
    }

    typingText = async(index) => {
        let string = this.state.textString[index];
        let target = document.getElementById('textTyping');
        for(let i=0;i<string.length;i++){
            target.textContent += string[i];
            await this.sleep(100);
        }
        await this.sleep(3000)
    }

    undoingText = async(index) => {
        let string = this.state.textString[index];
        let target = document.getElementById('textTyping');
        for(let i=0;i<string.length;i++){
            target.textContent = string.slice(0,string.length - i);
            await this.sleep(100);
        }
    }

    sleep = (milliseconds) => new Promise(resolve => setTimeout(resolve, milliseconds));

    render() {
        return (
            <div id={'homepage'} className={'homepage-container'}>
                <div className={'content-bg-container'}/>
                <div className={'content-text-container'}>
                    <h2>Choengchai Phachonyut</h2>
                </div>
                <div className={'text-container'}>
                    <div className={'text-style typing-text'}>
                        <span>I'm</span><span id={'textTyping'}></span>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;