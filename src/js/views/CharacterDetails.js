import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { useParams } from "react-router";

export const CharacterDetails = () => {
    const params = useParams()
    const { actions, store } = useContext(Context)

    useEffect(() => {
        actions.getCharacter(params.id)
    }, [])

    return (
        <div className="character">
            HOLA
        </div>
    )
};