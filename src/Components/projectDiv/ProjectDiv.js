import React, { Component } from 'react';
import './ProjectDiv.css';
import Github from './github.png'


class ProjectDiv extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }


    render() {
        const { project } = this.props

        return (
            <div>
                <div class='project'>
                    <span class='projectTitle'>{project.name} </span>
                    <div class='projectInfo'>
                    
                    <p>{project.info}</p>
                    
                    </div>
                    <a href={project.links.github} target="_blank"> <img class='githubImg' src={Github} alt='github' /> </a>
                    <p class='tech'>{project.technology}</p>
                </div>
               
              

            </div>
        );
    }
}

export default ProjectDiv;