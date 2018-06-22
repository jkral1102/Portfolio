import React, { Component } from 'react';
import './Portfolio.css';
import Laptop from './laptop.png'
import ProjectDiv from '../projectDiv'


class Portfolio extends Component {
    constructor() {
        super();
        this.state = {
            projects: [
                {
                    name: 'project1' ,
                    img: 'https://www.what-dog.net/Images/faces2/scroll0015.jpg',
                    description: 'this is project 1 baby'
                    // snips: [
                    //     snip1Img: 'https://dynaimage.cdn.cnn.com/cnn/q_auto,w_1024,c_fill,g_auto,h_576,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F180316113418-travel-with-a-dog-3.jpg',
                    //     snip2Img: 'https://www.what-dog.net/Images/faces2/scroll001.jpg',
                },
                {
                    name: 'project 2',
                    img: 'https://www.what-dog.net/Images/faces2/scroll0015.jpg',
                    description: 'this is project 2 yoo'}
                // {project3: }
                // {project4: }
            ]}
    }


    render() {
        var projects = this.state.projects.map((item, index) => (
            <ProjectDiv 
            name={item.name}
            img={item.img}
            description={item.description}
            //snips=item.snips[index]
            />
        ))
        return (
            <div id="portfolio">
                {/* <div><img id='projectImg' alt='project' src={Laptop}/></div>
                <p>Hello</p> */}
            {projects}
            </div>
        );
    }
}

export default Portfolio;