import '../../assets/styles/layout/_header.scss'
import React from 'react';
import Nav from '../Nav/Nav';
import About from '../About/About';

function Header(){
    return(
    <header className='header' id='accueil'>
        <Nav items={["Accueil", "A propos", "Contact"]}/>
        <About/>
    </header>
    )
}

export default Header; 