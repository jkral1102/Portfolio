import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import Container from './Components/Container';
import Background from './butt.jpg';

import Projects from './Components/Projects';



var background = {
  width: '100vw',
  height: "100vh",
  backgroundImage: `url(${Background})`
}

class App extends Component {

constructor() {
  super();
  this.state = {
    showProjects: false,
    showResume: false,
    showContact: false
  }
  this.showProjects=this.showProjects.bind(this);
  this.showResume=this.showResume.bind(this);
  this.showContact=this.showContact.bind(this);
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
    return (
      <div className="App" style={background}>
      
        <Header/>
        <Container 
          projects={this.showProjects}
          resume={this.showResume}
          contact={this.showContact}
        />
{myProjects}
       
        


      </div>
    );
  }
}

export default App;
