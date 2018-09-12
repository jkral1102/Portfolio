import React, { Component } from 'react'
import './Github.css'

class Github extends Component {
  render() {
    return (
      <div id='github'>
          <div id='githubTitle'>Click below to view my Github Repo for in-depth code samples!</div>
          <a href='https://github.com/jkral1102' target="_blank" rel="noopener noreferrer">
        <img src='/assets/images/github.png' alt='github'/>
        </a>
      </div>
    )
  }
}

export default Github;