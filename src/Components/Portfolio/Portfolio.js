import React, { Component } from 'react';
import './Portfolio.css'
import ProjectDiv from '../projectDiv'
import ProjectPage from '../projectPage'



class Portfolio extends Component {
    constructor() {
        super();
        this.state = {
            activeProject: '',
            projects: [
                {
                    name: 'React Memory Game',
                    img: '/assets/images/memoryGame/memoryGame1.PNG',
                    info: 'this is project 1 baby',
                    technology: 'React, Javascript, shitstuff',
                    links:
                    {
                        github: 'http://www.github.com',
                        heroku: 'http://www.heroku.com'
                    }
                    ,
                    snips:
                    [
                        {
                            img: '/assets/images/memoryGame/memoryGame2.PNG',
                            info: 'shit bag'
                        },
                        {
                            img: '/assets/images/memoryGame/memoryGame3.PNG',
                            info: 'poop butt'
                        }
                    ],

                },
                {
                    name: 'project2',
                    img: 'https://www.what-dog.net/Images/faces2/scroll0015.jpg',
                    info: 'this is project 1 baby',
                    technology: 'React, Javascript, shitstuff',
                    links:
                    {
                        github: 'http://www.github.com',
                        heroku: 'http://www.heroku.com'
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
                    name: 'project3',
                    img: 'https://www.what-dog.net/Images/faces2/scroll0015.jpg',
                    info: 'this is project 1 baby',
                    technology: 'React, Javascript, shitstuff',
                    links:
                    {
                        github: 'http://www.github.com',
                        heroku: 'http://www.heroku.com'
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
                    name: 'project4',
                    img: 'https://www.what-dog.net/Images/faces2/scroll0015.jpg',
                    info: 'this is project 1 baby',
                    technology: 'React, Javascript, shitstuff',
                    links:
                    {
                        github: 'http://www.github.com',
                        heroku: 'http://www.heroku.com'
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
                    name: 'project5',
                    img: 'https://www.what-dog.net/Images/faces2/scroll0015.jpg',
                    info: 'this is project 1 baby',
                    technology: 'React, Javascript, shitstuff',
                    links:
                    {
                        github: 'http://www.github.com',
                        heroku: 'http://www.heroku.com'
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
                    name: 'project6',
                    img: 'https://www.what-dog.net/Images/faces2/scroll0015.jpg',
                    info: 'this is project 1 baby',
                    technology: 'React, Javascript, shitstuff',
                    links:
                    {
                        github: 'http://www.github.com',
                        heroku: 'http://www.heroku.com'
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
                    name: 'project7',
                    img: 'https://www.what-dog.net/Images/faces2/scroll0015.jpg',
                    info: 'this is project 1 baby',
                    technology: 'React, Javascript, shitstuff',
                    links:
                    {
                        github: 'http://www.github.com',
                        heroku: 'http://www.heroku.com'
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
                    name: 'project8',
                    img: 'https://www.what-dog.net/Images/faces2/scroll0015.jpg',
                    info: 'this is project 1 baby',
                    technology: 'React, Javascript, shitstuff',
                    links:
                    {
                        github: 'http://www.github.com',
                        heroku: 'http://www.heroku.com'
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

    displayProject = (project) => {
     
        this.state.projects.map((item, index) => {
            if (item.name === project)
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
                key={item.name}
                name={item.name}
                img={item.img}
                description={item.description}
                display={this.displayProject}
            />
        ))
        //{ this.state.activeProject !=='' ? null:
        //  <div id='projectDivs'>{projectDivs}</div>
        let projects = this.state.activeProject !== '' ?
            <ProjectPage
                project={this.state.activeProject}
            /> : projectDivs


        return (
            <div id="portfolio">
                <div id='portfolioTitle'>
                    <span>Recent Projects</span>

              
                    <div id='showAll' onClick={this.removeActive}>All</div>
                <div id='iconDiv'>
                    <div
                        className={this.state.activeProject.name === 'project1' ? 'icons active ' : 'icons'}
                        onClick={() => { this.displayProject('project1')}}
                    ></div>
                    <div
                        className={this.state.activeProject.name === 'project2' ? 'icons active ' : 'icons'}
                        onClick={() => { this.displayProject('project2')}}
                    ></div>
                    <div
                        className={this.state.activeProject.name === 'project3' ? 'icons active ' : 'icons'}
                        onClick={() => { this.displayProject('project3')}}
                    ></div>
                    <div
                        className={this.state.activeProject.name === 'project4' ? 'icons active ' : 'icons'}
                        onClick={() => { this.displayProject('project4')}}
                    ></div>
                    <div
                        className={this.state.activeProject.name === 'project5' ? 'icons active ' : 'icons'}
                        onClick={() => { this.displayProject('project5')}}
                    ></div>
                    <div
                        className={this.state.activeProject.name === 'project6' ? 'icons active ' : 'icons'}
                        onClick={() => { this.displayProject('project6')}}
                    ></div>
                    <div
                        className={this.state.activeProject.name === 'project7' ? 'icons active ' : 'icons'}
                        onClick={() => { this.displayProject('project7')}}
                    ></div>
                    <div
                        className={this.state.activeProject.name === 'project8' ? 'icons active ' : 'icons'}
                        onClick={() => { this.displayProject('project8')}}
                    ></div>
                </div>
                </div>

                <div id='projectDivs'>{projects}</div>
              

            </div>
        );
    }
}

export default Portfolio;