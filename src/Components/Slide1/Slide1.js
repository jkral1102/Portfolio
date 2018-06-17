import React, { Component } from 'react';
import './Slide1.css';
import Image from './slide1.png';


class Slide1 extends Component {
    constructor() {
        super();
        this.state = {
            
        }
    }


    render() {
        
        return (
            <div id="container">
                <img id="slide1" alt="slide1" src={Image} />
            </div>
        );
    }
}

export default Slide1;