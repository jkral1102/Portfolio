import React, { Component } from 'react';
import './ProjectDiv.css';


class ProjectDiv extends Component {
    constructor() {
        super();
        this.state = {
            
        }
    }


    render() {
        
        return (
            <div id="allProjects">
                <div className='project'>
                    <div>Name: {this.props.name}</div>
                    <div className='overlay'>Explore</div>
                    <div><img className='projectImg' alt='projectImg' src={this.props.img}/></div>
                    <div>Description:  {this.props.description}</div>
                    
                </div>

                
            </div>
        );
    }
}

export default ProjectDiv;