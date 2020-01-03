import React, {Component} from 'react';
import './css/PageController.css';

class PageController extends Component {

    pageProcess = async() => {
        this.pageActive();
        await this.sleep(1000);
        this.pageInactive();

    }

    pageActive = () => {
        let target = document.getElementById('pagecontroller');
        target.classList.remove('page-inactive');
        target.classList.remove('page-hide');
        target.classList.add('page-active');
    }

    pageInactive = () => {
        let target = document.getElementById('pagecontroller');
        target.classList.remove('page-active');
        target.classList.add('page-inactive');
    }

    sleep = async(milliseconds) => new Promise(resolve => setTimeout(resolve, milliseconds));

    render() {
        return (
            <div id={'pagecontroller'} className={'page-inactive'}>

            </div>
        );
    }
}

export default PageController;