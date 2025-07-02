import React, {useState} from "react";
import arrowIcn from "../assets/arrow_collapse.png";

function Collapse({title,content,size}) {
    const [isOpen, setIsOpen] = useState(false);
    // ici on créer une variable collapseId qui contiendra chaque élément contrôle par le bouton du collapse, cela sera utile
    // pour l'accessibilité pour indiquer aux lecteurs écrans l'élément qui sera animer, cible ou modifié au click bouton - l'expression recherche les espaces pour remplacer par des tirets
    const collapseid = `collapse-content-${title.replace(/\s+/g, "-").toLowerCase()}`;

    return <div className={`collapse collapse--${size}`}>
            <button 
            className="collapse__header"
            aria-controls={collapseid} 
            aria-expanded={isOpen} 
            onClick={() => setIsOpen(!isOpen)} >
                <h2 className={"collapse__header-title"}>{title}</h2>
                <img 
                    className="collapse__header-icon" 
                    src={arrowIcn} 
                    style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                />
            </button>
            {isOpen && <div id={collapseid} className="collapse__content">{content}</div>}
    </div>
};

export default Collapse;