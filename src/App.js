import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
// import Sidebar from './Components/Sidebar';
import Bio from './Components/Bio';
import Background from './bg.jpeg';

import Projects from './Components/Projects';



var background = {
  width: '100vw',
  height: "100vh",
  // backgroundImage: `url(${Background})`,
  
  backgroundSize: 'cover',
  overflow: 'hidden',
}

class App extends Component {

  constructor() {
    super();
    this.state = {
      showProjects: false,
      showResume: false,
      showContact: false
    }
    this.showProjects = this.showProjects.bind(this);
    this.showResume = this.showResume.bind(this);
    this.showContact = this.showContact.bind(this);
  }

  showProjects = () => {
    this.setState({
      showProjects: !this.state.showProjects
    })
  }

  showResume = () => {
    this.setState({
      showResume: !this.state.showResume
    })
  }
  showContact = () => {
    this.setState({
      showContact: !this.state.showContact
    })
  }


  render() {
    let myProjects = this.state.showProjects === true ? <Projects /> : null
    // let myProjects = this.state.projects = true ? <Projects /> : null 
    // // let myProjects = this.state.projects = true ? <Projects /> : null 

    // {this.state.showResume} === true ? <Resume /> : null 
    // {this.state.showContact} === true ? <Contact /> : null 

    // <div id="sidebar">
    // <Sidebar 
    //  
    // /> 

    return (
      <div className="App" style={background}>
        {myProjects}
        <Bio />
        <Navbar 
           projects={this.showProjects}
           resume={this.showResume}
           contact={this.showContact}
        />
      </div>
    );
  }
}

export default App;
