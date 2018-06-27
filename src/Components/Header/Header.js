import React from "react";
import "./Header.css";
import Triangle from './triangle.png';

const Header = props => (

    <div id='headerDiv'>
        <div id='triangle'><img id='triangleImg' src={Triangle} alt='design' /></div>
        <div id='name'>Jennifer Kral</div>
    </div>

);

export default Header;