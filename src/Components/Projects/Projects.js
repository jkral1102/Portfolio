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
                    img: '/assets/images/memoryGame/memoryGame1.gif',
                    info: 'This project is a game using React, Node, and Express. To win the game you must click all 12 faces without selecting any twice.',
                    technology: 'React.js, Javascript, HTML/CSS',
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
                     name: 'React New York Times Search',
                    img: '/assets/images/nytSearch/nytGif.gif',
                    info: 'This project allows a user to saved and comment on articles pulled from the New York Times API.',
                    technology: 'Front end: React, Javascript, HTML/CSS. Back end: Node.js, Express.js. Database: MongoDB',
                    links:
                    {
                        github: 'https://github.com/jkral1102/NYT-React-Search',
                        azure: 'https://nytreactsearch.azurewebsites.net/'
                    }
                    ,
                    snips:
                    [
                        {
                            img: '/assets/images/nytSearch/nytSearch1.PNG',
                            info: 'An ajax call is made using Axios to pull article data from the NYT API. '
                        },
                        {
                            img: '/assets/images/nytSearch/nytSearch2.PNG',
                            info: 'A javascript array map method is used to pass information as props to the Articles component, allowing it to render and use the data as needed. '
                        }
                    ],

                },
                {
                    id: 3,
                    keywords: ['Redux', 'React.js', 'Eventful API', 'OpenWeather API', 'Bing News API', 'Node.js', 'Express.js', 'Javascript', 'HTML/CSS'],
                    name: 'Redux/React City Dashboard',
                    img: '/assets/images/nytSearch/nytGif.gif',
                    info: 'This project allows a user to type in a city name and pull relevant data on weather, news haedlines, and events.',
                    technology: 'Redux, React, Javascript, HTML/CSS, Node.js, Express.js, OpenWeather API, Bing News API, Eventful API',
                    links:
                    {
                        github: 'https://github.com/jkral1102/Redux-City-Dashboard',
                        azure: 'https://city-dashboard.azurewebsites.net'
                    }
                    ,
                    snips:
                    [
                        {
                            img: '/assets/images/nytSearch/nytSearch1.PNG',
                            info: 'An ajax call is made using Axios to pull article data from the NYT API. '
                        },
                        {
                            img: '/assets/images/nytSearch/nytSearch2.PNG',
                            info: 'A javascript array map method is used to pass information as props to the Articles component, allowing it to render and use the data as needed. '
                        }
                    ],

                }
            ]
        }

        this.displayProject = this.displayProject.bind(this);
        this.removeActive = this.removeActive.bind(this);
    }

    displayProject = (id) => {
        let newProject = this.state.projects.find(item => {
            return item.id === id
        })
        this.setState({ activeProject: newProject });
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
            /> :  projectDivs

        return (
            <div id="projects">
            <div id='projectsHeader'>
            
                <span id='projectsTitle'>Projects</span>
                {/* <span id='projectsSubtitle'>Explore my web apps below</span> */}
                {/* <p>Filter<p>Javascript</p><p>React</p><p>jQuery</p></p> */}

                <div id='shortcutMenu'>
                 <div id='iconDiv'>  
                 <div className='icons' onClick={this.removeActive}>All</div>
                        <div
                            className={this.state.activeProject.id === 1 ? 'icons active ' : 'icons'}
                            onClick={() => { this.displayProject(1) }}
                        ><span>1</span></div>
                        <div
                            className={this.state.activeProject.id === 2 ? 'icons active ' : 'icons'}
                            onClick={() => { this.displayProject(2) }}
                        ><span>2</span></div>
                        <div
                            className={this.state.activeProject.id === 3 ? 'icons active ' : 'icons'}
                            onClick={() => { this.displayProject(3) }}
                        ><span>3</span></div>
                        <div
                            className={this.state.activeProject.id === 4 ? 'icons active ' : 'icons'}
                            onClick={() => { this.displayProject(4) }}
                        ><span>4</span></div>
                       
                    </div>
                    </div>

                </div>
            
            

                <div id='projectDivs'>{projects}</div>


            </div>
        );
    }
}

export default Projects;