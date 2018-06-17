import React, { Component } from 'react';
import './Sidebar.css';

class Sidebar extends Component {
    constructor() {
        super();
        this.state = {
            languages: ['HTML', 'CSS', 'Javascript', 'Node', 'MySQL', 'MongoDB', 'React']
        }
    }

    render() {

        return (
            <div id="Sidebar">
                <div id="container"> {
                    this.state.languages.map((item, i) => <div className="languages" key={i}>{item}</div>)
                }
                </div>
            </div>
        );
    }
}

export default Sidebar;