import React, {useState, useEffect} from "react";

function Carrousel({images}) {
    const [index, setIndex] = useState(0);
    const [paused, isPaused] = useState(false);
    /*Rajout d'un contrôle d'effet de bord avec le tableau d'images en dépendance pour faire défiler automatique la gallerie avec un système de pause au survol
    ou au défilement manuel du visiteur */
    useEffect(() =>{
        if(images.length <=1 || paused) return; /* dans le cas d'une seule image de logement pas de défilement auto */

        const interval= setInterval(() => {
            setIndex((index) => (index + 1) % images.length);
        }, 3000)

        return () => clearInterval(interval); /* on nettoie l'interval à chaque rendu */

    },[images,paused]);

    const prevIndex = () => {
        setIndex((index - 1 + images.length) % images.length);
    }
    const nextIndex = () => {
        setIndex((index + 1 ) % images.length);
    }

    return <section className="carrousel">
        <div className="carrousel__gallery" role="region" aria-label="Carrousel d'images du logement">
            <img className="carrousel__gallery-image" src={images[index]} alt="Point de vue d'une partie du logement"
            onMouseEnter={() => isPaused(true)} 
            onMouseLeave={() => isPaused(false)} 
            onFocus={() => isPaused(true)}
            onBlur={() => isPaused(false)}
            tabIndex={0}
            />
        </div>
        {/* Gestion de l'appararition des flèches de contrôles et du suivi de l'index pour les logements avec plusieurs images uniquement */}
        {images.length > 1 && (
        <>
            <div className="carrousel_controls">
                <button className="carrousel__controls-prev" type="button" aria-label="Photo précédente" onClick={prevIndex}>
                    <svg className="carousel__prev-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width="24" height="24" fill="currentColor">
                        <path d="M34.9 239l194-194c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L131.5 256l154 154c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0l-194-194c-9.5-9.4-9.5-24.6-.1-34z" />
                    </svg>
                </button>
                <button className="carrousel__controls-next" type="button" aria-label="Photo suivante" onClick={nextIndex}>
                    <svg className="carousel__next-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width="24" height="24" fill="currentColor" aria-hidden="true" focusable="false">
        				    <path d="M285.5 273L91.5 467c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9L188.5 256 34.9 102.5c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l194 194c9.4 9.4 9.4 24.6 0 33.9z"/>
      			    </svg>
                </button>
            </div>
            <div className="carrousel__index" aria-live="polite" role="status">
                <span className="carrousel__index-value">{index + 1}/{images.length}</span>
                <span className="sr-only">Images numéro {index + 1} sur {images.length}</span>
            </div> 
        </>
        )}
        
    </section>
};

export default Carrousel;