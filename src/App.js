import React, { Component } from 'react'
import './App.css'
import Header from './Components/Header'
import Navbar from './Components/Navbar'
// import Sidebar from './Components/Sidebar';
import Home from './Components/Home'
import Background from './1.png'
import Portfolio from './Components/Portfolio'
// import Projects from './Components/Projects'



var background = {
  width: '100vw',
  height: "100vh",
  // backgroundImage: `url(${Background})`, 
  // opacity: 0.2,
  // backgroundSize: 'cover',
  // overflow: 'hidden',
}

class App extends Component {

  constructor() {
    super();
    this.state = {
      showHome: true,
      showPortfolio: false,
      // showResume: false,
      // showContact: false
    }
    this.showPortfolio = this.showPortfolio.bind(this);
    //this.showBio = this.showBio.bind(this);
    // this.showResume = this.showResume.bind(this);
    // this.showContact = this.showContact.bind(this);
  }

  showPortfolio = () => {
    this.setState({
      // showPortfolio: !this.state.showPortfolio,
      showPortfolio: true,
      showHome: false
    })
  }

  showHome = () => {
    this.setState({
      showHome: true,
      showPortfolio: false
    })
  }

  // showResume = () => {
  //   this.setState({
  //     showResume: !this.state.showResume
  //   })
  // }
  // showContact = () => {
  //   this.setState({
  //     showContact: !this.state.showContact
  //   })
  // }


  render() {
    let showPortfolio = this.state.showPortfolio === true ? 
      <Portfolio 
        clickedProject={this.clickedProject}
        
      /> : null
    let showHome = this.state.showHome === true ? <Home /> : null
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
      <div id='headerContent'>
        <Header />
        <Navbar
          home={this.showHome}
          portfolio={this.showPortfolio}
          resume={this.showResume}
          contact={this.showContact}
          github={this.showGithub}
        />
        </div>
        
        <div id='pageContent'>
        {showHome}
        {showPortfolio}
        </div>


        <div id='backgroundImg'></div>
      </div>
    );
  }
}

export default App;
