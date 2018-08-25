import React, { Component } from 'react'
import './App.css'
import Header from './Components/Header'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Projects from './Components/Projects'
import Contact from './Components/Contact'



var background = {
  width: '100vw',
  height: "100vh"
}

class App extends Component {

  constructor() {
    super();
    this.state = {
      showHome: true,
      showProjects: false,
      showContact: false
    }
    this.showHome = this.showHome.bind(this);
    this.showProjects = this.showProjects.bind(this);
    this.showContact = this.showContact.bind(this);
  }
  showHome = () => {
    this.setState({
      showHome: true,
      showProjects: false,
      showContact: false
    })
  }

  showProjects = () => {
    this.setState({
      showProjects: true,
      showHome: false,
      showContact: false
    })
  }

  showContact = () => {
    this.setState({
      showHome: false,
      showProjects: false,
      showContact: true
    })
  }



  render() {
    let showHome = this.state.showHome === true ? <Home /> : null
    let showProjects = this.state.showProjects === true ? <Projects /> : null
    let showContact = this.state.showContact === true ? <Contact /> : null
    
    return (
      <div className="App" style={background}>
        <div id='headerContent'>
          <Header />
          <Navbar
            home={this.showHome}
            portfolio={this.showProjects}
            resume={this.showResume}
            contact={this.showContact}
            github={this.showGithub}
          />
        </div>

        <div id='pageContent'>
          {showHome}
          {showProjects}
          {showContact}
        </div>


        <div id='backgroundImg'></div>
      </div>
    );
  }
}

export default App;
