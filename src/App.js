import React, {Component} from 'react';
import LeftSideBar from "./components/LeftSideBar";
import Content from './components/Content';
import './App.css';
import PageController from "./components/PageController";

class App extends Component {
    pageProcess = () => {
        this.refs.pageController.pageProcess();
    }

    render() {
        return (
            <div className={'app-container'}>
                <LeftSideBar pageChange={this.pageProcess} />
                <Content/>
                <PageController ref={'pageController'}/>
            </div>
        );
    }
}

export default App;
