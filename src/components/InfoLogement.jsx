import React from "react";
import redStars from "../assets/red.png";
import greyStars from "../assets/grey.png";

function InfoLogement({title,location,tags,host,rating}) {
    const { correctedRegion, correctedCity, arrondissement } = parseLocation(location);
    // ajout de l'arrondissement au tags si présent
    let newTags = tags;
    if (arrondissement && !tags.includes(arrondissement)) {
        newTags = [...tags, arrondissement];
    }
    // Conversion en chiffre de la note
    const numberRating = parseInt(rating);
    const diffStars = 5 - numberRating;
    const stars= [];
    for (let i=1; i <=numberRating;i++){
        stars.push(redStars);
    }
    for (let i=1; i <=diffStars;i++){
        stars.push(greyStars);
    }
    // Décomposition du Prénom et Nom de famille pour correspondre à la maquette
    const [name,lastname] = host.name.split(" ");

    return <article className="logement__content-details" aria-labelledby="logement__title">
        <div className="logement__details">
            <div className="logement__details-title">
                <h2 className="logement__title">{title}</h2>
                <p className="logement__location">{correctedCity}, {correctedRegion}</p>
            </div>
            <ul className="logement__tags">
                {newTags.map((tag,index)=> (
                    <li className="logement__tag" key={index}>
                        {tag}
                    </li>
               ))}
            </ul>
        </div>
        <div className="logement__hosting">
            <div className="logement__hosting-info">
                <span className="logement__hosting-hote">{name}<br/>{lastname}</span>
                <img className="logement__hosting-img" src={host.picture} alt="Photo du propriétaire" />
            </div>
            <ul className="logement__rating">
               {stars.map((star,index)=>(
                    <li className="logement__star" key={index}>
                        <img src={star} alt="Etoile accordé par les utilisateurs" aria-hidden="true" width={24.75} height={24}/>
                    </li>
               ))}
               <span className="sr-only">Note de {rating} sur 5</span>
            </ul>
        </div>   
    </article>
};

export default InfoLogement;

function parseLocation(location){
    // On sépare la région de la ville dans un premier temps
    const [region, city] = location.split(" - ");

    // Ensuite on corrige une erreur d'accent sur Ile de france si il est présent 
    let correctedRegion = region;
    if(region.trim().toLowerCase() === "ile de france"){
        correctedRegion = "Île-de-France"; 
    };
    let arrondissement;
    let correctedCity;
    // Ici on définit deux regex qui seront utiliser pour détécter les arrondissements
    const arrondissementRegex = /\b\d{5}\b/;   // arrondissement type code postal
    const arrondissementERegex = /\b\d{1,2}e\b/; // arrondissement type "10e"
    // On verifie la présence d'un arrondissement et si oui on l'affecte à postalMatch
    const postalMatch = city.match(arrondissementRegex) || city.match(arrondissementERegex);
    // si on a postalMatch on séparé distinctement d'un coté l'arrondissement et de l'autre la ville 
    if (postalMatch) {
    arrondissement = postalMatch[0];
    correctedCity = city.replace(arrondissement, "").trim();
    } else {
    arrondissement = null;
    correctedCity = city; 
    }
    return { correctedRegion, correctedCity, arrondissement};
};