import React, { Component } from 'react';
import './projectPage.css';
import downArrow from './downArrow.png';


class projectPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            project: props.project
        }
    }


    render() {


        return (
            <div id='projectPage'>
                <div id='leftPageDiv'>
                    <div id='projectPageName'>{this.state.project.name}</div>
                    <div id='projectPageTech'>{this.state.project.technology}</div>
                    <div id='projectPageInfo'>{this.state.project.info}</div>
                    <div id='projectPageLinks'>
                        <p>{this.state.project.links.github}</p>
                        <p>{this.state.project.links.heroku}</p>
                    </div>
                </div>

                <div id='rightPageDiv'>
                    <div id='frontPicDiv'>
                     
                        <img id='frontPic' alt='frontPic' src={this.state.project.img} />
                        <img id='downArrow' alt='downArrow' src={downArrow} />
                    </div>
                    <div id='codeSnipDiv'>
                        <img class='codeSnip' alt='codeSnip' src={this.state.project.snips.snip1} />
                        <img class='codeSnip' alt='codeSnip' src={this.state.project.snips.snip2} />
                    </div>
                    
                </div>

            </div>
        );
    }
}

export default projectPage;