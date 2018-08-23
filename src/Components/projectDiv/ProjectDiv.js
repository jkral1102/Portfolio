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
            <div className='project'>
                <div className='projectContent'>
                    <div className='projectName'>{this.props.name}</div>
                    <div><img className='projectImg' alt='projectImg' src={this.props.img}/>
                    </div>
                    {/* <div>Description:  {this.props.description}</div> */}
                </div>
                <div className='popup'>
                    <p className='popupText' onClick={this.projectClicked}>View</p>
                </div>
            </div>
        );
    }
}

export default ProjectDiv;