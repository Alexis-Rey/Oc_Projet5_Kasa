import React from "react";
import Banner from "../components/Banner";
import Collapse from "../components/Collapse";
import src1 from "../assets/banner-desk-about.webp";
import src2 from "../assets/banner-mob-about.webp";

function About() {
   return <div className="about">
        <section className="about__banner">
            <Banner title="" src1={src1} src2={src2} />
        </section>
        <section className="about__collapses">
            <Collapse title="Fiabilité" size="large" tag="article">Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et
            toutes les informations sont régulièrement vérifiées par nos équipes.</Collapse>
            <Collapse title="Respect" size="large" tag="article">La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation
             du voisinage entraînera une exclusion de notre plateforme </Collapse>
            <Collapse title="Service" size="large" tag="article">La qualité du service est au coeur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit
            avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance. </Collapse>
            <Collapse title="Sécurité" size="large" tag="article">La sécurité est la priorité chez Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux 
            critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards
            sont bien respectés. <br />Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes. </Collapse>
        </section>
    </div>
};

export default About;