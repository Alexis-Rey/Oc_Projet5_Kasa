import React from "react";
import { Link } from "react-router-dom";
import logements from "../data/logements.json";

function Cards() {
 return <>
    <ul className="list">
            {logements.map((logement) => (
                <li className="list-logements" key={logement.id}>
                     <Link to={`/logement/${logement.id}`} className="list-card" style={{backgroundImage: `url(${logement.cover})`}}>
                        <div className="list-card-content">
                            <p className="list-card-title">{logement.title}</p>
                        </div> 
                    </Link>
                </li>
            )
            )} 
    </ul>
 </>
}

export default Cards;