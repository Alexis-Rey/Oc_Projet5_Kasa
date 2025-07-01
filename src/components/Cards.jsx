import React from "react";
import { Link } from "react-router-dom";
import logements from "../data/logements.json";

function Cards() {
 return <>
    <ul className="list">
            {logements.map((logement, index) => (
                <li className="list-logements" key={logement.id}>
                     <Link to={`/logement/${logement.id}`} className="list-card">
                        <div className="list-card-content">
                            <img src={logement.cover} className="list-card-img" alt={logement.title}
                            loading={index >= 3 ? "lazy" : "auto"}
                            fetchPriority={index <= 3 ? "high" : "auto"} />
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