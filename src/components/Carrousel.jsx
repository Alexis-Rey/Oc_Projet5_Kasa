import React, {useState, useEffect, useRef} from "react";

/*Fonction qui gère le carrousel d'images
@params [array of images] images :  tableaux des images du logements séléctionné
@params [state] index : variable d'état de l'index de l'image en cours 
@params [state] paused : variable d'état de qui gère si le défilement auto est en pause ou non
@params [state] stopTransition : variable d'état qui gère l'arret de toute transition pour la boucle infini en bord de tableau
@params [state] isAnimating : variable d'état qui gère l'état d'animation en combiné avec isAnimatingRef pour desactiver temporairement les boutons
@params [ref] isAnimating: valeur de référence de l'animation servant à verrouiller la navigation de défilement sur un spam click
*/
function Carrousel({images}) {
    const [index, setIndex] = useState(0);
    const [paused, isPaused] = useState(false);
    const [stopTransition, setStopTransition] = useState(false);
    const total = images.length;
    const [isAnimating, setIsAnimating] = useState(false);
    const isAnimatingRef = useRef(false);

    /*Rajout d'un contrôle d'effet de bord avec le tableau d'images en dépendance pour faire défiler automatique la gallerie  */
    useEffect(() =>{
        if(total <=1 || paused) return; /* dans le cas d'une seule image de logement pas de défilement auto */

        const interval= setInterval(() => {
            nextIndex();
        }, 2000);

        return () => clearInterval(interval); /* on nettoie l'interval à chaque rendu */

    },[images,paused]);

    // Fonctions de navigation
    const prevIndex = () => {
        if(isAnimatingRef.current) return;
        isAnimatingRef.current = true;
        setIsAnimating(true);
        setIndex((oldIndex) => oldIndex - 1 );
        setTimeout(() => {
            isAnimatingRef.current=false;
            setIsAnimating(false);
        }, 500);
    }
    const nextIndex = () => {
        if(isAnimatingRef.current) return;
        isAnimatingRef.current = true;
        setIsAnimating(true);
        setIndex((oldIndex) => oldIndex + 1 );
        setTimeout(() => {
            isAnimatingRef.current = false;
            setIsAnimating(false);
        }, 500);
    }

    // Reset de l'index lorsque l'on atteint les bords c'est à dire une des deux images clônes ajouter avant et après la galerie d'images récupéré
    useEffect(() => {
        if(total <=1) return; /* si on a une seul image de logement pas de gestion */

        // si on atteint le clone de l'image de fin
        if(index === -1){
            setTimeout(() =>{
                setStopTransition(true);
                setIndex(total-1);
            },500);
        }
        // si on atteint le cone de l'image initial
        if(index === total){
            setTimeout(() =>{
                setStopTransition(true);
                setIndex(0);
            },500);
        }
    },[index,images]);

    // Réactivation de la transition entre les images classique
    useEffect(()=> {
        if(stopTransition){
           const reset =  setTimeout(()=>{
                setStopTransition(false)
            },20);
            return () => clearTimeout(reset); /*on nettoie le timeout */
        }
    },[stopTransition]);

    // Clones rajouter aux images
    const extendedImages = [images[total-1], ...images, images[0]];

    // Rajout d'une variable de suivi de l'index réel hors clone pour l'affichage aux utilisateurs
    const displayIndex = (() => {
        if (index === -1) return total;
        if (index === total) return 1;
        return index + 1;
    })();

    return <div className="logement__carrousel">
        <div className="carrousel__gallery" role="region" aria-label="Carrousel d'images du logement">
            {/* Mise en place d'une div globale parent qui se déplace en fonction de l'état de l'index pour provoquer l'effet de défilement entre les images
            , il s'agit d'une mécanique de glissement cumulative et pas comparative ici, en effet seul la valeur de transform change en étant soit +négative soit -négative
            et comme la div contient l'ensemble des images alignés cela provoque l'effet voulu */}
             <div className="carrousel__track"style={{ transform: `translateX(-${(index + 1) * 100}%)`, transition: stopTransition ? "none" : "transform 0.5s ease" }}>
                {extendedImages.map((imageSrc, i) => {
                    const isClone = i === 0 || i === extendedImages.length -1;
                return (
                    <img key={i} className="carrousel__gallery-image" src={imageSrc} alt={`Point de vue ${i + 1} partie du logement`} aria-hidden={isClone ? "true" : undefined} />
                );
                })}
            </div>
        </div>
        {/* Gestion de l'appararition des flèches de contrôles et du suivi de l'index pour les logements avec plusieurs images uniquement */}
        {total > 1 && (
        <>
            <div className="carrousel__controls-nav">
                <button className="carrousel__controls-prev" type="button" aria-label="Photo précédente" onClick={() => {prevIndex();isPaused(true);}} disabled={isAnimating}>
                    <svg className="carrousel__prev-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width="47" height="79" fill="currentColor" aria-hidden="true" focusable="false">
                        <path d="M34.9 239l194-194c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L131.5 256l154 154c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0l-194-194c-9.5-9.4-9.5-24.6-.1-34z" />
                    </svg>
                </button>
                <button className="carrousel__controls-next" type="button" aria-label="Photo suivante" onClick={() => {nextIndex();isPaused(true);}} disabled={isAnimating}>
                    <svg className="carrousel__next-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width="47" height="79" fill="currentColor" aria-hidden="true" focusable="false">
        				    <path d="M285.5 273L91.5 467c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9L188.5 256 34.9 102.5c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l194 194c9.4 9.4 9.4 24.6 0 33.9z"/>
      			    </svg>
                </button>
            </div>
            <div className="carrousel__controls-lecture">
                <button className={`carrousel__controls-play carrousel--${paused}`} type="button" onClick={() => isPaused(false)} aria-label="Lecture auto du diaporama">
                    <svg className="carrousel__play-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width="24" height="24" fill="currentColor" aria-hidden="true" focusable="false">
                        <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                    </svg>
                </button>
                <button className={`carrousel__controls-stop carrousel--${!paused}`} type="button" onClick={() => isPaused(true)} aria-label="Mettre en pause le diaporama">
                    <svg className="carrousel__stop-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"  width="24" height="24" fill="currentColor" aria-hidden="true" focusable="false">
                        <path d="M48 64C21.5 64 0 85.5 0 112L0 400c0 26.5 21.5 48 48 48l32 0c26.5 0 48-21.5 48-48l0-288c0-26.5-21.5-48-48-48L48 64zm192 0c-26.5 0-48 21.5-48 48l0 288c0 26.5 21.5 48 48 48l32 0c26.5 0 48-21.5 48-48l0-288c0-26.5-21.5-48-48-48l-32 0z"/>
                    </svg>
                </button>
            </div>
            <div className="carrousel__index" aria-live="polite" role="status">
                <span className="carrousel__index-value">{displayIndex}/{total}</span>
                <span className="sr-only">Images numéro {displayIndex} sur {total}</span>
            </div> 
        </>
        )}
        
    </div>
};

export default Carrousel;