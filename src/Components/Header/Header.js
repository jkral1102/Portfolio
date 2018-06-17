import React, { Component } from 'react';
import './Header.css';
import jennifer from './me.jpg'

class Header extends Component {
    render() {
      return (
        <div id="header">

           
            <img id='profilePic' src={jennifer} alt='jennifer'/>
            <img id='profilePic' src={jennifer} alt='jennifer'/>

            <span>My Portfolio</span>

            <img id='profilePic' src={jennifer} alt='jennifer'/>
            <img id='profilePic' src={jennifer} alt='jennifer'/>
            
        </div>
    );
  }
}

export default Header;