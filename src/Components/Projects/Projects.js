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
                    info: 'This is a game where you must click all 12 faces without selecting any twice. This was my first app using React!',
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
                    info: 'This app allows you to form a group where members can add restaurant suggestions and it selects a random restaurant. With this app, I learned a variety of fun jQuery animations and Sequelize querying. ',
                    technology: 'Javascript • jQuery • Sequelize • Node.js • Express.js • Postgresql • Google Location API • Yelp API',
                    links:
                    {
                        github: 'https://github.com/jkral1102/LunchLotto.git',
                        azure: 'https://lunchlottojkral.herokuapp.com/'
                    },
                    overlaytext: 'To use: Add a new group, a restaurant suggestion, and pick a restaurant.'


                },
                {
                    name: 'New York Times Search',
                    img: '/assets/images/nytSearch/nyt.png',
                    info: 'This  app allows you to save and comment on articles pulled from the New York Times API. This was my first full-stack React application and I learned MongoDB.',
                    technology: 'React • Javascript • Node.js • Express.js • MongoDB',
                    links:
                    {
                        github: 'https://github.com/jkral1102/NYT-React-Search',
                        azure: 'https://nytreactsearch.azurewebsites.net/'
                    },
                    overlaytext: 'To use: Search for, save, comment, and delete an article.'

                },
                {
                    name: 'City Dashboard',
                    img: '/assets/images/cityDashboard/city.png',
                    info: 'This app allows you to type in a city name and pull relevant data on weather, news headlines, and local events. This was my first app using Redux and a variety of external APIs in a single application.',
                    technology: 'Redux • React • Javascript • Node.js • Express.js • OpenWeather API • Bing News API • Eventful API',
                    links:
                    {
                        github: 'https://github.com/jkral1102/Redux-City-Dashboard',
                        azure: 'https://citydashboard.azurewebsites.net'
                    },
                    overlaytext: 'Type in a city name to get started.'

                },
                {
                    name: 'And Lastly...',
                    img: '/assets/images/portfolio.png',
                    info: 'This Portfolio!',
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