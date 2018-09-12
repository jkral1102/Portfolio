import React, { Component } from 'react'
import './App.css'
import Header from './Components/Header'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import Github from './Components/Github'
import Footer from './Components/Footer'




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
      showContact: false,
      showGithub: false
    }
    this.showHome = this.showHome.bind(this);
    this.showProjects = this.showProjects.bind(this);
    this.showContact = this.showContact.bind(this);
    this.showGithub = this.showGithub.bind(this);
  }
  showHome = () => {
    this.setState({
      showHome: true,
      showProjects: false,
      showContact: false,
      showGithub: false
    })
  }

  showProjects = () => {
    this.setState({
      showProjects: true,
      showHome: false,
      showContact: false,
      showGithub: false
    })
  }

  showContact = () => {
    this.setState({
      showHome: false,
      showProjects: false,
      showContact: true,
      showGithub: false
    })
  }

  showGithub = () => {
    this.setState({
      showHome: false,
      showProjects: false,
      showContact: false,
      showGithub: true
    })
  }



  render() {
    let showHome = this.state.showHome === true ? <Home /> : null
    let showProjects = this.state.showProjects === true ? <Projects /> : null
    let showContact = this.state.showContact === true ? <Contact /> : null
    let showGithub = this.state.showGithub === true ? <Github /> : null
      
    
    return (
      <div id="App" style={background}>
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
          {showGithub}
        </div>
       <Footer />

        <div id='backgroundImg'></div>
      </div>
    );
  }
}

export default App;
