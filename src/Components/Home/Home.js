import React, { Component } from 'react';
import './Home.css';
import Img from './filter.png'
import Triangle from './tri1.png'


class Bio extends Component {
    constructor() {
        super();
        this.state = {
            
        }
    }


    render() {
        
        return (
            <div id="bioContainer">
                <div id='title'>
                    <div id='triangle'><img id='triangleImg' src={Triangle} alt='ballGif'/></div>
                    <div id='name'>Jennifer Kral</div>
                </div>
                <div id='bio'>
                    <p>
                    Bacon ipsum dolor amet kielbasa beef ham hock, picanha shankle alcatra rump jerky venison. Tri-tip jowl bacon doner alcatra tenderloin swine. Shoulder tri-tip shankle ham hock filet mignon tongue pastrami. Short loin venison filet mignon turkey ham hock cupim spare ribs, jowl pastrami shoulder capicola.
                    </p>
                    <p>
                    Ribeye doner pig, capicola burgdoggen kielbasa ground round. Pork loin ribeye pastrami leberkas andouille pork, strip steak alcatra ground round short ribs meatball capicola spare ribs buffalo. Bresaola ball tip pancetta shankle beef ribeye. Tongue turducken strip steak salami kielbasa, rump ribeye sausage pork kevin. Pig rump pork short ribs pork belly. Biltong rump alcatra, chicken short ribs meatball ham pork loin strip steak filet mignon ground round.
                    </p>

                    <img id='profilePic' src={Img} alt='profile pic'/>
                </div>
                

            </div>
        );
    }
}

export default Bio;