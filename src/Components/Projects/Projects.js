import React, { Component } from 'react';
import './Projects.css'
import ProjectDiv from '../projectDiv'
import ProjectPage from '../projectPage'

class Projects extends Component {
    constructor() {
        super();
        this.state = {
            activeProject: '',
            projects: [
                {
                    id: 1,
                    name: 'React Memory Game',
                    img: '/assets/images/memoryGame/memoryGame1.PNG',
                    info: 'This project is a game using React, Node, and Express. To win the game you must click all 12 faces without selecting any twice.',
                    technology: 'React.js, Javascript',
                    links:
                    {
                        github: 'https://github.com/jkral1102/React-Memory-Game/blob/master/README.md',
                        azure: 'https://memorygamejkral-memorygame.azurewebsites.net/'
                    }
                    ,
                    snips:
                    [
                        {
                            img: '/assets/images/memoryGame/memoryGame2.PNG',
                            info: 'General App.js structure. Includes the following components: Header, FriendCard, and conditional rendering of the WonGame component.'
                        },
                        {
                            img: '/assets/images/memoryGame/memoryGame3.PNG',
                            info: 'A stateless functional component is used to render the game cards (faces).'
                        }
                    ],

                },
                {
                    id: 2,
                    name: 'project2',
                    img: '/assets/images/nytSearch/nytGif.gif',
                    info: 'This project allows a user to saved and comment on articles pulled from the New York Times API.',
                    technology: 'Front end: React, Javascript, HTML/CSS. Back end: Node.js, Express.js. Database: MongoDB',
                    links:
                    {
                        github: 'https://github.com/jkral1102/NYT-React-Search',
                        azure: 'http://www.azure.com'
                    }
                    ,
                    snips:
                    [
                        {
                            img: 'https://cdn.psychologytoday.com/sites/default/files/styles/article-inline-half/public/field_blog_entry_images/2018-02/vicious_dog_0.png?itok=nsghKOHs',
                            info: 'shit bag'
                        },
                        {
                            img: 'https://i.kinja-img.com/gawker-media/image/upload/s--7yqrHzAV--/c_scale,f_auto,fl_progressive,q_80,w_800/cyglmmz7dkhatbmzbxoq.jpg',
                            info: 'poop butt'
                        }
                    ],

                },
                {
                    id: 3,
                    name: 'project3',
                    img: 'https://www.what-dog.net/Images/faces2/scroll0015.jpg',
                    info: 'this is project 1 baby',
                    technology: 'React, Javascript, shitstuff',
                    links:
                    {
                        github: 'http://www.github.com',
                        azure: 'http://www.azure.com'
                    }
                    ,
                    snips:
                    [
                        {
                            img: 'https://cdn.psychologytoday.com/sites/default/files/styles/article-inline-half/public/field_blog_entry_images/2018-02/vicious_dog_0.png?itok=nsghKOHs',
                            info: 'shit bag'
                        },
                        {
                            img: 'https://i.kinja-img.com/gawker-media/image/upload/s--7yqrHzAV--/c_scale,f_auto,fl_progressive,q_80,w_800/cyglmmz7dkhatbmzbxoq.jpg',
                            info: 'poop butt'
                        }
                    ],

                },
                {
                    id: 4,
                    name: 'project4',
                    img: 'https://www.what-dog.net/Images/faces2/scroll0015.jpg',
                    info: 'this is project 1 baby',
                    technology: 'React, Javascript, shitstuff',
                    links:
                    {
                        github: 'http://www.github.com',
                        azure: 'http://www.azure.com'
                    }
                    ,
                    snips:
                    [
                        {
                            img: 'https://cdn.psychologytoday.com/sites/default/files/styles/article-inline-half/public/field_blog_entry_images/2018-02/vicious_dog_0.png?itok=nsghKOHs',
                            info: 'shit bag'
                        },
                        {
                            img: 'https://i.kinja-img.com/gawker-media/image/upload/s--7yqrHzAV--/c_scale,f_auto,fl_progressive,q_80,w_800/cyglmmz7dkhatbmzbxoq.jpg',
                            info: 'poop butt'
                        }
                    ],

                },
                {
                    id: 5,
                    name: 'project5',
                    img: 'https://www.what-dog.net/Images/faces2/scroll0015.jpg',
                    info: 'this is project 1 baby',
                    technology: 'React, Javascript, shitstuff',
                    links:
                    {
                        github: 'http://www.github.com',
                        azure: 'http://www.azure.com'
                    }
                    ,
                    snips:
                    [
                        {
                            img: 'https://cdn.psychologytoday.com/sites/default/files/styles/article-inline-half/public/field_blog_entry_images/2018-02/vicious_dog_0.png?itok=nsghKOHs',
                            info: 'shit bag'
                        },
                        {
                            img: 'https://i.kinja-img.com/gawker-media/image/upload/s--7yqrHzAV--/c_scale,f_auto,fl_progressive,q_80,w_800/cyglmmz7dkhatbmzbxoq.jpg',
                            info: 'poop butt'
                        }
                    ],

                }
            ]
        }



        this.displayProject = this.displayProject.bind(this);
        this.removeActive = this.removeActive.bind(this);
    }

    displayProject = (id) => {
        this.state.projects.map((item, index) => {
            if (item.id === id)
                this.setState({ activeProject: item });
        })
    }

    removeActive = () => {
        this.setState({
            activeProject: ''
        })
    }


    render() {
        let projectDivs = this.state.projects.map((item, index) => (
            <ProjectDiv
                
                id={item.id}
                name={item.name}
                img={item.img}
                description={item.description}
                display={this.displayProject}
            />
        ))
        let projects = this.state.activeProject !== '' ?
            <ProjectPage
                project={this.state.activeProject}
            /> : projectDivs

        return (
            <div id="portfolio">
                <div id='portfolioTitle'>
                    <span>Projects</span>


                    <div id='showAll' onClick={this.removeActive}>All</div>
                    <div id='iconDiv'>
                        <div
                            className={this.state.activeProject.id === 1 ? 'icons active ' : 'icons'}
                            onClick={() => { this.displayProject(1) }}
                        ></div>
                        <div
                            className={this.state.activeProject.id === 2 ? 'icons active ' : 'icons'}
                            onClick={() => { this.displayProject(2) }}
                        ></div>
                        <div
                            className={this.state.activeProject.id === 3 ? 'icons active ' : 'icons'}
                            onClick={() => { this.displayProject(3) }}
                        ></div>
                        <div
                            className={this.state.activeProject.id === 4 ? 'icons active ' : 'icons'}
                            onClick={() => { this.displayProject(4) }}
                        ></div>
                        <div
                            className={this.state.activeProject.id === 5 ? 'icons active ' : 'icons'}
                            onClick={() => { this.displayProject(5) }}
                        ></div>
                        <div
                            className={this.state.activeProject.id === 6 ? 'icons active ' : 'icons'}
                            onClick={() => { this.displayProject(6) }}
                        ></div>
                        <div
                            className={this.state.activeProject.id === 7 ? 'icons active ' : 'icons'}
                            onClick={() => { this.displayProject(7) }}
                        ></div>
                        <div
                            className={this.state.activeProject.id === 8 ? 'icons active ' : 'icons'}
                            onClick={() => { this.displayProject(8) }}
                        ></div>
                    </div>
                </div>

                <div id='projectDivs'>{projects}</div>


            </div>
        );
    }
}

export default Projects;