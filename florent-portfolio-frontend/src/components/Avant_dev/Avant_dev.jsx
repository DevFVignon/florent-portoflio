import React from "react";
import Compta from "../../assets/images/compta.png"
import Droit from "../../assets/images/logo-juridique.png"

function AvantDev(){
    return(
        <section className="avant_dev">
            <h2>Avant ma carrière de développeur</h2>    
            <p>Avant d'être développeur, j'ai évolué pendant plusieurs années en <span>comptabilté gestion</span>, 
                ce qui me permet d'être compétent sur des projets qui nécessiterait de comprendre des notions de <span>comptabiltié, 
                de finance, de contrôle de gestion, et de droit, juridique, social et fiscal</span> particulièrement.
            </p>
            <div className="avant_dev-photo">
                <div><img src={Compta} alt="" /></div>
                <div><img src={Droit} alt="" /></div>
            </div>
        </section>
    )
}

export default AvantDev;