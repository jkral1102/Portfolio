import React, { Component } from 'react';
import './Navbar.css';
import resumePDF from './Resume.pdf'


class Navbar extends Component {
  render() {
    return (
      <div id='navbar'>
        <div id='titleDiv'>
          <div id='name'>Jennifer Kral</div>
        </div>

        <div id="navMenu">
          <div><span><a href='/' alt='home'>Home</a></span></div>
          <div><span><a href='/projects' alt='projects'>Projects</a></span></div>
          <div id='res' onClick={this.props.resume}>
            <a href={resumePDF} target="_blank" rel="noopener noreferrer">Resume</a>
          </div>
          <div><span> <a href='/contact' alt='contact'>Contact</a></span></div>
          <div><span><a href='/github' alt='github'>Github</a></span></div>
        </div>
      </div>
    );
  }
}

export default Navbar;