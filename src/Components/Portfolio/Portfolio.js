import React, { Component } from 'react';
import './Portfolio.css';
import Laptop from './laptop.png'
import ProjectDiv from '../projectDiv'
import ProjectPage from '../projectPage'


class Portfolio extends Component {
    constructor() {
        super();
        this.state = {
            activeProject: '',
            projects: [
                {
                    name: 'project1',
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
                        {
                            snip1: 'https://cdn.psychologytoday.com/sites/default/files/styles/article-inline-half/public/field_blog_entry_images/2018-02/vicious_dog_0.png?itok=nsghKOHs',
                            snip2: 'https://i.kinja-img.com/gawker-media/image/upload/s--7yqrHzAV--/c_scale,f_auto,fl_progressive,q_80,w_800/cyglmmz7dkhatbmzbxoq.jpg'
                }
            
        },
        {
            name: 'project1',
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
                {
                    snip1: 'https://cdn.psychologytoday.com/sites/default/files/styles/article-inline-half/public/field_blog_entry_images/2018-02/vicious_dog_0.png?itok=nsghKOHs',
                    snip2: 'https://i.kinja-img.com/gawker-media/image/upload/s--7yqrHzAV--/c_scale,f_auto,fl_progressive,q_80,w_800/cyglmmz7dkhatbmzbxoq.jpg'
        }
    
},
{
    name: 'project1',
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
        {
            snip1: 'https://cdn.psychologytoday.com/sites/default/files/styles/article-inline-half/public/field_blog_entry_images/2018-02/vicious_dog_0.png?itok=nsghKOHs',
            snip2: 'https://i.kinja-img.com/gawker-media/image/upload/s--7yqrHzAV--/c_scale,f_auto,fl_progressive,q_80,w_800/cyglmmz7dkhatbmzbxoq.jpg'
}

},
{
    name: 'project1',
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
        {
            snip1: 'https://cdn.psychologytoday.com/sites/default/files/styles/article-inline-half/public/field_blog_entry_images/2018-02/vicious_dog_0.png?itok=nsghKOHs',
            snip2: 'https://i.kinja-img.com/gawker-media/image/upload/s--7yqrHzAV--/c_scale,f_auto,fl_progressive,q_80,w_800/cyglmmz7dkhatbmzbxoq.jpg'
}

},
{
    name: 'project1',
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
        {
            snip1: 'https://cdn.psychologytoday.com/sites/default/files/styles/article-inline-half/public/field_blog_entry_images/2018-02/vicious_dog_0.png?itok=nsghKOHs',
            snip2: 'https://i.kinja-img.com/gawker-media/image/upload/s--7yqrHzAV--/c_scale,f_auto,fl_progressive,q_80,w_800/cyglmmz7dkhatbmzbxoq.jpg'
}

},
{
    name: 'project1',
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
        {
            snip1: 'https://cdn.psychologytoday.com/sites/default/files/styles/article-inline-half/public/field_blog_entry_images/2018-02/vicious_dog_0.png?itok=nsghKOHs',
            snip2: 'https://i.kinja-img.com/gawker-media/image/upload/s--7yqrHzAV--/c_scale,f_auto,fl_progressive,q_80,w_800/cyglmmz7dkhatbmzbxoq.jpg'
}

},
{
    name: 'project1',
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
        {
            snip1: 'https://cdn.psychologytoday.com/sites/default/files/styles/article-inline-half/public/field_blog_entry_images/2018-02/vicious_dog_0.png?itok=nsghKOHs',
            snip2: 'https://i.kinja-img.com/gawker-media/image/upload/s--7yqrHzAV--/c_scale,f_auto,fl_progressive,q_80,w_800/cyglmmz7dkhatbmzbxoq.jpg'
}

},
{
    name: 'project1',
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
        {
            snip1: 'https://cdn.psychologytoday.com/sites/default/files/styles/article-inline-half/public/field_blog_entry_images/2018-02/vicious_dog_0.png?itok=nsghKOHs',
            snip2: 'https://i.kinja-img.com/gawker-media/image/upload/s--7yqrHzAV--/c_scale,f_auto,fl_progressive,q_80,w_800/cyglmmz7dkhatbmzbxoq.jpg'
}

}


                // {
                //     name: 'project2',
                //     img: 'https://www.what-dog.net/Images/faces2/scroll0015.jpg',
                //      info: 'this is project 1 baby'
                    
                // },
                // {
                //     name: 'project3',
                //     img: 'https://www.what-dog.net/Images/faces2/scroll0015.jpg',
                //     description: 'this is project 2 yoo'
                // },
                // {
                //     name: 'project4',
                //     img: 'https://www.what-dog.net/Images/faces2/scroll0015.jpg',
                //     description: 'this is project 2 yoo'
                // },
                // {
                //     name: 'project5',
                //     img: 'https://www.what-dog.net/Images/faces2/scroll0015.jpg',
                //     description: 'this is project 2 yoo'
                // },
                // {
                //     name: 'project6',
                //     img: 'https://www.what-dog.net/Images/faces2/scroll0015.jpg',
                //     description: 'this is project 2 yoo'
                // }, {
                //     name: 'project7',
                //     img: 'https://www.what-dog.net/Images/faces2/scroll0015.jpg',
                //     description: 'this is project 2 yoo'
                // }, {
                //     name: 'project8',
                //     img: 'https://www.what-dog.net/Images/faces2/scroll0015.jpg',
                //     description: 'this is project 2 yoo'
                // }

            ]
        }
        this.displayProject = this.displayProject.bind(this);
        this.removeActive = this.removeActive.bind(this);
    }

    displayProject(project) {
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
                    <span id='name'>Recent Projects</span>
                    
                </div>
                 
                <div id='projectDivs'>{projects}</div>
                <div id='showAll' onClick={this.removeActive}>All</div>
                
            </div>
        );
    }
}

export default Portfolio;