import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { useParams } from "react-router";

export const CharacterDetails = (props) => {
    
    console.log("Props received:", props);

    const { uid } = useParams();
    const { actions, store } = useContext(Context)

    useEffect(() => {
        actions.addDetailToCharacters(props.character?.uid)
    }, []
    )

    return (
        <div>
            <div className="card-body">
                <p className="card-title">{props.character?.name}</p>
                <p className="card-text">
                    TEXTO {uid}
                </p>
            </div>
        </div>
    )
};