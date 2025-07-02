import React from "react";
import { Link } from "react-router-dom";
import logements from "../data/logements.json";

function Cards() {
 return <>
    <ul className="list">
            {logements.map((logement, index) => (
                <li className="list__logements" key={logement.id}>
                     <Link to={`/logement/${logement.id}`} className="list__card">
                        <div className="list__card-content">
                            <img src={logement.cover} className="list__card-img" alt={`Image montrant un ${logement.title}`}
                            loading={index >= 3 ? "lazy" : "auto"}
                            fetchPriority={index <= 3 ? "high" : "auto"} />
                            <h3 className="list__card-title">{logement.title}</h3>
                        </div> 
                    </Link>
                </li>
            )
            )} 
    </ul>
 </>
}

export default Cards;