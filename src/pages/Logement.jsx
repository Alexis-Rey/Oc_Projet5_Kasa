import React from "react";
import { Navigate, useParams } from "react-router-dom";
import logements from "../data/logements.json";

function Logement() {
    const {id} = useParams();
    const logement = logements.find(logement => logement.id === id);

    if(!logement){
        return <Navigate to="/404" />
    }
    return <div>
        <p>Logement en cours : {logement.id}</p>
    </div>
};

export default Logement;