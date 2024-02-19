import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { useParams } from "react-router";

export const CharacterDetails = () => {
    const params = useParams()
    const { actions, store } = useContext(Context)

    useEffect(() => {
        actions.addDetailToCharacters(props.character?.uid)
    }, []
    )

    return (
        <div className="character">
            HOLA
        </div>
    )
};