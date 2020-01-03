import React, {Component} from 'react';
import './css/Content.css';
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import ProjectPage from "./ProjectPage";

class Content extends Component {
    render() {
        return (
            <div className={'content-container'}>
                <HomePage />
                <AboutPage />
                <ProjectPage />
            </div>
        );
    }
}

export default Content;