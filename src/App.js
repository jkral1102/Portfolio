import React, { Component } from 'react'
import './App.css'
import Header from './Components/Header'
import Navbar from './Components/Navbar'
// import Sidebar from './Components/Sidebar';
import Home from './Components/Home'
import Portfolio from './Components/Portfolio'
import Contact from './Components/Contact'
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
      showContact: false
    }
    this.showHome = this.showHome.bind(this);
    this.showPortfolio = this.showPortfolio.bind(this);
    this.showContact = this.showContact.bind(this);
  }
  showHome = () => {
    this.setState({
      showHome: true,
      showPortfolio: false,
      showContact: false
    })
  }

  showPortfolio = () => {
    this.setState({
      showPortfolio: true,
      showHome: false,
      showContact: false
    })
  }

  showContact = () => {
    this.setState({
      showHome: false,
      showPortfolio: false,
      showContact: true
    })
  }



  render() {
    let showHome = this.state.showHome === true ? <Home /> : null
    let showPortfolio = this.state.showPortfolio === true ? <Portfolio /> : null
    let showContact = this.state.showContact === true ? <Contact /> : null
    
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
          {showContact}
        </div>


        <div id='backgroundImg'></div>
      </div>
    );
  }
}

export default App;
