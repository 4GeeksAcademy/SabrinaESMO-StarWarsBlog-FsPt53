import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";


export const PlanetCard = (props) => {

    const { store, actions } = useContext(Context)

    useEffect(() => {
        actions.addDetailToPlanets(props.planets?.uid)
    }, []
    )

    return (
        <div>
            <div className="row justify-content-center mx-1">
                <div className="card mx-3 mb-5 mt-4">
                    <img src={`https://starwars-visualguide.com/assets/img/planets/${props.planets?.uid}.jpg`} className="card-image-top"></img>
                    <div className="card-body">
                        <p className="card-title">{props.planets?.name}</p>
                        <p className="card-text">
                            Population: {props.planets?.properties?.population} <br />
                            Terrain: {props.planets?.properties?.terrain} <br />
                        </p>
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