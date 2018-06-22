import React, { Component } from 'react';
import './Sidebar.css';
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
          
                <div id="sidebarMenu"> 
                    <div className="item" onClick={this.props.projects}>
                        <img className="itemImg" alt="options" src={ProjectsImg} />
                    </div>
                    <div className="item"> 
                        <img className="itemImg" alt="options" src={Resume} />
                    </div>
                    <div className="item">
                        <img className="itemImg" alt="options" src={Contact} />
                    </div>
                    
                    
                </div>

                
           
        );
    }
}

export default Container;