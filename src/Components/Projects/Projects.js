import React, { Component } from 'react';
import './Projects.css';
import ProjectDiv from '../projectDiv';

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
                        azure: 'https://reactmemorygame.azurewebsites.net'
                    }

                },
                {
                    keywords: ['Javascript', 'jQuery', 'HTML/CSS', 'Sequelize', 'Postgresql', 'Google Location API', 'Yelp API', 'Node.js/Express'],
                    name: 'LunchLotto',
                    img: '/assets/images/lunchlotto/lotto.PNG',
                    info: 'This app allows you to form a group where members can add restaurant suggestions and it selects a random restaurant. With this app, I learned a variety of fun jQuery animations and Sequelize querying. ',
                    technology: 'Javascript • jQuery • Sequelize • Node.js • Express.js • Postgresql • Google Location API • Yelp API',
                    links:
                    {
                        github: 'https://github.com/jkral1102/LunchLotto.git',
                        azure: 'https://lunchlottojkral.herokuapp.com/'
                    }


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
                    }

                },
                {
                    keywords: ['Redux', 'React.js', 'Eventful API', 'OpenWeather API', 'Bing News API', 'Node.js', 'Express.js', 'Javascript', 'HTML/CSS'],
                    name: 'City Dashboard',
                    img: '/assets/images/cityDashboard/city.png',
                    info: 'This app allows you to type in a city name and pull relevant data on weather, news headlines, and local events. This was my first app using Redux and a variety of external APIs in a single application.',
                    technology: 'Redux • React • Javascript • Node.js • Express.js • OpenWeather API • Bing News API • Eventful API',
                    links:
                    {
                        github: 'https://github.com/jkral1102/Redux-City-Dashboard',
                        azure: 'https://citydashboard.azurewebsites.net'
                    }

                }
            ]
        }
    }


    render() {

        return (
            <div id='wrapper'>
                {this.state.projects.map((item, index) => (

                    <div class='projects'>
                        {index % 2 === 0 ?
                            <React.Fragment>
                               <a href={item.links.azure}  title="View" target="_blank"> <img class='projectImg' src={item.img} alt='project' /></a>
                                <ProjectDiv
                                    project={item}
                                />
                            </React.Fragment>
                            :
                            <React.Fragment>
                                <ProjectDiv project={item} />
                               <a href={item.links.azure}  title="View" target="_blank"> <img class='projectImg' src={item.img} alt='project' /></a>
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