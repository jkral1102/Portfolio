import React, { Component } from 'react';
import './ProjectDiv.css';


class ProjectDiv extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name
        }
    }
    
    projectClicked = () => 
    {
        this.props.display(this.props.name)
    }

    render() {
        return (
            <div class='project'>
                <div class='projectContent'>
                    <div class='projectName'>{this.props.name}</div>
                    <div><img class='projectImg' alt='projectImg' src={this.props.img} /></div>
                    {/* <div>Description:  {this.props.description}</div> */}
                </div>
                <div class='popup'>
                    <p class='popupText' onClick={this.projectClicked}>View</p>
                </div>
            </div>
        );
    }
}

export default ProjectDiv;