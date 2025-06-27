import React from "react";
import { Link } from "react-router-dom";
import logements from "../data/logements.json";

function Cards() {
 return <div className="cards">
    <ul>
            {logements.map((logement) => (
                <li key={logement.id}>
                     <Link to={`/logement/${logement.id}`}>
                        {logement.title}
                    </Link>
                </li>
            )
            )} 
    </ul>
 </div>
}

export default Cards;