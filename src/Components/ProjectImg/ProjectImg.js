import React, { Component } from 'react';
import './ProjectImg.css'

const ProjectImg = props => {

    return (

        <div class="hvrbox ">
            <a href={props.project.links.azure} title="View" target="_blank"> 
                <img class='projectImg' src={props.project.img} alt='project' />
            
            <div class="hvrbox-layer_top">
                <div class="hvrbox-text">{props.project.overlaytext}</div>
            </div>
            </a>
        </div>

    );
}

export default ProjectImg;