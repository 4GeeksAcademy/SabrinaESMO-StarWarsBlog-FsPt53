import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import FotoPrueba from "../../img/aura.jpg"


export const CharacterCard = (props) => {

    const{store, actions} = useContext(Context)
    useEffect(() => {
        actions.addDetailToCharacters(props.character?.uid)
    },[]

    )

    return(
    <div>
        <div className="row justify-content-center mx-1">
            <div className="card mx-3 mb-5 mt-4">
                <img src={`https://starwars-visualguide.com/assets/img/characters/${props.character?.uid}.jpg`} className="card-image-top"></img>
                <div className="card-body">
                    <p className="card-title">{props.character?.name}</p>
                    <p className="card-text">Color de ojos: {props.character?.properties?.eye_color} <br /> Color de pelo: metálico. <br /> Género: Androide. </p>
                </div>
                <div className="d-flex justify-content-around my-2">
                    <button className="card-button py-1 px-3">Details</button>
                    <button className="card-fav py-1 px-3"><i className="fa-regular fa-star"></i></button>
                </div>
            </div>
        </div>
    </div>
    )
};