import React, { Component } from 'react';
import './Projects.css';
import Placeholder from './projectsslide.png';
import leftArrow from './leftarrow.png';
import rightArrow from './rightarrow.png';
import Slide1 from '../Slide1';
// import Slide2 from './slide2.png';
// import Slide3 from './slide3.png';
// import Slide4 from './slide4.png';




class Projects extends Component {
    constructor() {
        super();
        this.state = {
            slideIndex: 1,
            totalSlides: 4
        }

        this.prevSlide = this.prevSlide.bind(this);
        this.nextSlide = this.nextSlide.bind(this);
    }

    prevSlide = () =>{
        if (this.state.slideIndex === 1) {
            this.setState({
                slideIndex: 4
            })
        } else {
        this.setState({
            slideIndex: this.state.slideIndex - 1
        })
    }
}

    nextSlide = () => {
        if (this.state.slideIndex === 4) {
            this.setState({
                slideIndex: 1
            })
        } else {
        this.setState({
            slideIndex: this.state.slideIndex + 1
        })
    }
    }

    
    render() {
        let slide1 = this.state.slideIndex === 1 ? <Slide1 /> : null;
        // let slide2 = this.state.slideIndex === 2 ? <Slide2 /> : null;
        // let slide3 = this.state.slideIndex === 3 ? <Slide3 /> : null;
        // let slide4 = this.state.slideIndex === 4 ? <Slide4 /> : null;
        // <img alt="placeholder" src={Placeholder} />

        return (
            <div id="myProjects">
                <h3> {this.state.slideIndex} </h3>
                <img id="leftArrow" alt='left arrow' src={leftArrow} onClick={this.prevSlide} />
               
{slide1}
                <img id="rightArrow" alt='right arrow' src={rightArrow} onClick={this.nextSlide} />
            </div>
        );
    }
}

export default Projects;