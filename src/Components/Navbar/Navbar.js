import React, { Component } from 'react';
import './Navbar.css';


class Navbar extends Component {
    render() {
      // <img id='profilePic' src={jennifer} alt='jennifer'/>
      return (
        <div id="navbar">
              <div className='link' onClick={this.props.home}>Home</div>
              <div className='link' onClick={this.props.portfolio}>Projects</div>
              <div className='link' onClick={this.props.resume}>Resume</div>
              <div className='link' onClick={this.props.contact}> Contact </div>
              <div className='link' onClick={this.props.github}> Github </div>
        </div>
    );
  }
}

export default Navbar;