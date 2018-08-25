import React, { Component } from 'react';
import './Navbar.css';


class Navbar extends Component {
    render() {
      return (
        <div id="navbar">
              <div onClick={this.props.home}><span>Home</span></div>
              <div onClick={this.props.portfolio}><span>Projects</span></div>
              <div onClick={this.props.resume}><span>Resume</span></div>
              <div onClick={this.props.contact}><span> Contact</span></div>
              <div onClick={this.props.github}> <span>Github</span></div>
        </div>
    );
  }
}

export default Navbar;