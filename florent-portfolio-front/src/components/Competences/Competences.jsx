import React from "react";
import logoFrontEnd from '../../assets/images/logo_frontend.png'
import logoBackEnd from '../../assets/images/logo_backend.png'
import logoOutils from '../../assets/images/logo_outils.jpg'


function Competences() { 
    return(
        <section className="competences">
            <h2>Compétences</h2>
            <div className="competences_bloc">
                <img src={logoFrontEnd} alt="" />
                <h3>Front-end</h3>
                <p>Html <br />Css <br />SCSS <br />React <br />Jest </p>
            </div>
            <div className="competences_bloc">
                <img src={logoBackEnd} alt="" />
                <h3>Back-end</h3>
                <p>Node.js <br />Express <br />MongoDB <br />Apache <br />PHP <br />SQL</p>
            </div>
            <div className="competences_bloc">
                <img src={logoOutils} alt="" />
                <h3>Outils</h3>
                <p>Visual Studio Code <br />Git <br />Github <br />Pack Office <br />Appli Google <br />Excel</p>
            </div>
        </section>
    )
}

export default Competences; 