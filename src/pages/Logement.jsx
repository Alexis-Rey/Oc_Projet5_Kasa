import React from "react";
import { Navigate, useParams } from "react-router-dom";
import logements from "../data/logements.json";
import Carrousel from "../components/Carrousel";

function Logement() {
    const {id} = useParams();
    const logement = logements.find(logement => logement.id === id);

    if(!logement){
        return <Navigate to="/404" />
    }
    return <div>
        <Carrousel images={logement.pictures} />
    </div>
};

export default Logement;