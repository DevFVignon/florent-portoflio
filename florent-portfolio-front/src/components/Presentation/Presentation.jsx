import React from "react";
import photoProfil from '../../assets/images/photo_profil_vignon_florent.jpg';

function Presentation(){
    return(
        <section className="presentation">
            <h2>Présentation</h2>
            <div className="profil_photo"><img src={photoProfil} alt="Florent Vignon" /></div>
            <p className="profil_description">
                <span>Développeur passionné dans le domaine du web</span>, je développe des sites en veillant à utiliser les meilleures pratiques, pour un site efficace, sécurisé et maintenable facilement ! <br />
                
                J'ai plusieurs réalisations, présentées ci-dessous. <br />
                
                Et plus bas dans le site, mon parcours précédent en comptabilité qui rend plus singulier mon profil ! <br />
                
                {/* Vous pouvez télécharger mon CV au format PDF ici. */}
            </p>
        </section>
    )
}

export default Presentation;