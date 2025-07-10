import React from "react";
import { Navigate, useParams } from "react-router-dom";
import logements from "../data/logements.json";
import Carrousel from "../components/Carrousel";
import InfoLogement from "../components/InfoLogement";
import Collapse from "../components/Collapse";

function Logement() {
    const {id} = useParams();
    const logement = logements.find(logement => logement.id === id);

    if(!logement){
        return <Navigate to="/404" />
    }
    return <section className="logement">
        <Carrousel images={logement.pictures} />
        <InfoLogement 
        title={logement.title}
        location={logement.location}
        tags={logement.tags}
        host={logement.host}
        rating={logement.rating}
        />
        <div className="logement__collapse">
            <Collapse title="Description" size="small" tag="aside">{logement.description}</Collapse>
            <Collapse title="Équipements" size="small" tag="aside">{logement.equipments.map((equipment,index)=> (
                <li className="logement__equipment" key={index}>{equipment}</li>
            ))}
            </Collapse>
        </div>
    </section>
};

export default Logement;