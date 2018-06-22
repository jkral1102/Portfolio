import React, { Component } from 'react';
import './Navbar.css';
import Logo from './logo.png';

class Navbar extends Component {
    render() {
      // <img id='profilePic' src={jennifer} alt='jennifer'/>
      return (
        <div id="navbar">

          <div>
   
              <div className='linkDiv'>
                  <a className='link' href="www.google.com" onClick={this.props.projects}>Projects</a>
              </div>
              <div className='linkDiv'>
              <a className='link' href="www.google.com">Resume</a>
              </div>
              <a className='link' href="www.google.com"> Contact </a>
              <a className='link' href="www.google.com"> Github </a>
          </div>
        </div>
    );
  }
}

export default Navbar;