import React, { Component } from 'react';
import './Navbar.css';


class Navbar extends Component {
    render() {
      // <img id='profilePic' src={jennifer} alt='jennifer'/>
      return (
        <div id="navbar">
              <div onClick={this.props.home}>Home</div>
              <div onClick={this.props.portfolio}>Projects</div>
              <div onClick={this.props.resume}>Resume</div>
              <div onClick={this.props.contact}> Contact </div>
              <div onClick={this.props.github}> Github </div>
        </div>
    );
  }
}

export default Navbar;