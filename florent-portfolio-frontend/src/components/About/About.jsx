import React, { useEffect, useRef } from 'react';
import Typewriter from 'typewriter-effect/dist/core';

function About() {
    const txtAnimRef = useRef(null);

    useEffect(() => {
        if (txtAnimRef.current) {
            const typewriter = new Typewriter(txtAnimRef.current, {
                loop: false,
                delay: 40,
                deleteSpeed: 30,
            });

            typewriter
                .typeString('Je m\'appelle Florent Vignon et suis développeur Web Full-Stack !')
                .pauseFor(1000)
                .deleteChars(13) 
                .typeString(', en <span style="color: #27ae60;">HTML</span> !')
                .pauseFor(1000)
                .deleteChars(6) 
                .typeString('<span style="color: #68ffa7;">CSS</span> !')
                .pauseFor(1000)
                .deleteChars(5)
                .typeString('<span style="color: #68ffa7;">React et Node.js</span> !')
                .pauseFor(1000)
                .start();
        }
    }, []);

    return (
        <section className="about" id='about'>
            <h1 className="txtAnim">Bonjour,</h1>
            <h1 ref={txtAnimRef}>Je m'appelle Florent Vignon et suis développeur Web Full-Stack !</h1>
        </section>
    );
}

export default About;




