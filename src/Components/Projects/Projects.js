import React, { Component } from 'react';
import './Projects.css';
import ProjectDiv from '../projectDiv';
import ProjectImg from '../ProjectImg';

class Projects extends Component {
    constructor() {
        super();
        this.state = {
            projects: [
                {
                    name: 'Memory Game ',
                    img: '/assets/images/memoryGame/logo.png',
                    info: 'In this game you must click all 12 pictures without selecting any twice. This was my first app built with React!',
                    technology: 'React.js • Javascript',
                    links:
                    {
                        github: 'https://github.com/jkral1102/React-Memory-Game/blob/master/README.md',
                        azure: 'http://memory.jenniferkral.com/'
                    },
                    overlaytext: 'Click to play the game.'

                },
                {
                    name: 'LunchLotto',
                    img: '/assets/images/lunchlotto/lotto.PNG',
                    info: 'Form a group where members can add restaurant names and the app picks a random restaurant. With this app, I learned a variety of fun jQuery animations along with Sequelize querying. ',
                    technology: 'Javascript • jQuery • Sequelize • Node.js • Express.js • Google API • Yelp API',
                    links:
                    {
                        github: 'https://github.com/jkral1102/LunchLotto.git',
                        azure: 'https://lunchlottojkral.herokuapp.com/'
                    },
                    overlaytext: 'To use: add a new group, a restaurant suggestion, and pick a restaurant.'


                },
                {
                    name: 'New York Times Forum',
                    img: '/assets/images/nytSearch/nyt.png',
                    info: 'This forum allows you to save and comment on articles pulled from the New York Times API. This was my first full-stack React application built with MongoDB.',
                    technology: 'React • Javascript • Node.js • Express.js • MongoDB',
                    links:
                    {
                        github: 'https://github.com/jkral1102/NYT-React-Search',
                        azure: 'https://mysterious-meadow-43660.herokuapp.com/'
                    },
                    overlaytext: 'To use: search for, save, comment, and delete an article.'

                },
                {
                    name: 'City Dashboard',
                    img: '/assets/images/cityDashboard/city.png',
                    info: 'This dashboard takes in a city name and pulls relevant data on weather, news, and local events. I built this to learn Redux and utilized many external APIs in a single application.',
                    technology: 'Redux • React • Javascript • Node.js • Express.js • OpenWeather API • Bing News API • Eventful API',
                    links:
                    {
                        github: 'https://github.com/jkral1102/Redux-City-Dashboard',
                        azure: 'https://citydashboard.azurewebsites.net'
                    },
                    overlaytext: 'Type in a city name to get started.'

                },
                {
                    name: 'Lastly... My Portfolio!',
                    img: '/assets/images/portfolio.png',
                    info: 'I aimed for a simple, mobile-friendly design that is scalable for use with many projects.',
                    technology: 'React • Javascript',
                    links:
                    {
                        github: 'https://github.com/jkral1102/Portfolio',
                        azure: 'www.jenniferkral.com'
                    },
                    overlaytext: 'I hope you enjoyed my page!'

                },
            ]
        }
    }


    render() {
        
        return (
            <div id='wrapper' class='scrollMe'>
                {this.state.projects.map((item, index) => (

                    <div class='projects'>
                        {index % 2 === 0 ?
                            <React.Fragment>
                               <ProjectImg project={item} />
                                <ProjectDiv project={item} />
                            </React.Fragment>
                            :
                            <React.Fragment>
                                <ProjectDiv project={item} />
                                <ProjectImg project={item} />
                            </React.Fragment>
                        }
                    </div>
                ))

                }
            </div>
        );
    }
}

export default Projects;