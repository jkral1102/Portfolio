import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Footer from './Components/Footer';
import { Scrollbars } from 'react-custom-scrollbars';
import { BrowserRouter as Router } from "react-router-dom";

var background = {
  height: "100vh"
}

class App extends Component {
  handleClick = () => {
    this.refs.scrollbar.view.scroll({
      top: window.outerHeight,
      behavior: 'smooth',
   });
  }

  render() {
    return (
      <Router>
        <div id="App" style={background}>
          <Scrollbars ref='scrollbar' >
            <Navbar />
            <Home handleClick={this.handleClick} />
            <Footer />
            <div id='backgroundImg'></div>
          </Scrollbars>
        </div>
      </Router>
    );
  }
}

export default App;
