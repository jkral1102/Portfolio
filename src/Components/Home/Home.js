import React, { Component } from 'react';
import $ from 'jquery';
import './Home.css';
import Img from './profilePic.png';
import Projects from '../Projects';
const Scroll = require('react-scroll');
const scroll = Scroll.animateScroll;




class Bio extends Component {
    constructor() {
        super();
        this.state = {
        }
    }

      scrollTo = () => {
        const x = $(window).height() ;
        scroll.scrollTo(x);
      }
    //     // $('#App').animate({ scrollTop: $('#bioContainer').offset().top }, 'slow');
    //   }

    

    render() {
        return (
            <div >

                <div id='bio'>
                    <div><img id='profilePic' src={Img} alt='profile' /></div>
                    <div id='bioInfo'>
                        <span id='homeTitle' >Hello! </span>

                        <p>I am a Minneapolis based front end web developer. I develop web applications using the MERN stack (MongoDB, Express, React, and Node.js) and I am always striving to incorporate new and improved technologies.</p>

                        <p>I hold true to the principle that things can always be improved. Whether its by using better technologies, refactoring code, or even rethinking an entire app from the ground up!</p>
                    </div>
                </div>
                <div onClick={this.scrollTo}> 
                <div class='projectsTitle shimmer' >Projects</div>
          
                <Projects />
             
                </div>
            </div>
        );
    }
}

export default Bio;