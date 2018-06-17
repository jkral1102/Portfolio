import React, { Component } from 'react';
import './Container.css';
import ProjectsImg from './projects.png';
import Resume from './resume.png';
import Contact from './contact.png';


class Container extends Component {
    constructor() {
        super();
        this.state = {
           
            
        }
      
    }



    render() {

        return (
            <div id="container">
                <div id="items"> 
                    <div className="item" onClick={this.props.projects}>
                        <img alt="options" src={ProjectsImg} />
                    </div>
                    <div className="item"> 
                        <img alt="options" src={Resume} />
                    </div>
                    <div className="item">
                        <img alt="options" src={Contact} />
                    </div>
                    
                    
                </div>

                
            </div>
        );
    }
}

export default Container;