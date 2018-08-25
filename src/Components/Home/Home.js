import React, { Component } from 'react';
import './Home.css';
import Img from './filter.png'

class Bio extends Component {
    constructor() {
        super();
        this.state = {
        }
    }

    render() {
        return (
            <div id="bioContainer">

                <div id='bio'>
                    <div><img id='profilePic' src={Img} alt='profile pic' /></div>
                    <div>
                        <p><strong>Hello!</strong> </p>

                        <p>I am a Minneapolis-based Web Developer. I primarily incorporate the MERN stack for my web applications. However, I am always striving to incorporate new and improved technologies.</p>

                        <p>I hold true to the principle that things can always be improved. Whether its by using better technologies, refactoring code, or even rethinking an entire App from the ground up.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Bio;