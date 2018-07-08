import React, { Component } from 'react';
import './projectPage.css';
import leftArrow from './arrow.png';
import rightArrow from './arrowR.png';



class projectPage extends Component {
    constructor(props) {
        super(props);

        var imgArray = [{ img: props.project.img, info: props.project.info }, ...props.project.snips];

        this.state = {
            project: props.project,
            imgIndex: 0,
            img: 'https://www.what-dog.net/Images/faces2/scroll0015.jpg',
            images: imgArray
        }

        this.imgIndex = this.imgIndex.bind(this);
    }

    imgIndex = (arrow) => {

        if (arrow === 'left') {
            if (this.state.imgIndex === 0) {
                this.setState({
                    imgIndex: 2
                })
            }
            else {
                this.setState({
                    imgIndex: this.state.imgIndex - 1
                })
            }
        }

        if (arrow === 'right') {
            if (this.state.imgIndex === 2) {
                this.setState({
                    imgIndex: 0
                })
            }
            else {
                this.setState({
                    imgIndex: this.state.imgIndex + 1
                })
            }
        }
    }

    changeImg = (pg) => {
        this.setState({
            imgIndex: pg
        })
    }

    componentWillReceiveProps(nextProps) {
        if (this.state.project.name !== nextProps.project.name) {


            this.setState({
                project: nextProps.project
            })
        }
    }

    render() {

        return (
            <div id='projectPage'>
                <div id='leftPageDiv'>
                    <div id='projectPageName'>
                        <h1>{this.state.project.name}</h1>
                    </div>
                    <div id='projectPageTech'>
                        <h2>Technologies used</h2>
                        <h3>{this.state.project.technology}</h3>
                    </div>
                    <div id='projectPageInfo'>{this.state.project.info}</div>
                    <div id='projectPageLinks'>
                        <h3> See more! </h3>
                        <p>{this.state.project.links.github}</p>
                        <p>{this.state.project.links.heroku}</p>
                    </div>
                </div>

                <div id='rightPageDiv'>

                    <div id='slideshow'>
                        <div><img id='arrow' alt='arrow' src={leftArrow} onClick={() => { this.imgIndex('left') }} /></div>
                        <div><img id='projectImg' alt='projectImg' src={this.state.images[this.state.imgIndex].img} /></div>
                        <div><img id='arrow' alt='arrow' src={rightArrow} onClick={() => { this.imgIndex('right') }} /> </div>
                    </div>

                    <div id='imgInfo'><p>{this.state.images[this.state.imgIndex].info}</p></div>
                    <div id='pagination'>
                        <div
                            className={this.state.imgIndex === 0 ? 'pagination active' : 'pagination'}
                            onClick={() => { this.changeImg(0) }}>
                        </div>
                        <div
                            className={this.state.imgIndex === 1 ? 'pagination active' : 'pagination'}
                            onClick={() => { this.changeImg(1) }}>
                        </div>
                        <div
                            className={this.state.imgIndex === 2 ? 'pagination active' : 'pagination'}
                            onClick={() => { this.changeImg(2) }}>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default projectPage;