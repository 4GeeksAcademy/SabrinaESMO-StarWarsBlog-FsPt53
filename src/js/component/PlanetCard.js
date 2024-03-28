import React from "react";
import { Link } from "react-router-dom";
import altimg from "../../img/rigo-baby.jpg"



export const PlanetCard = ({planets}) => {

    return (
        <div>
            <div className="row justify-content-center mx-1">
                <div className="card mx-3 mb-5 mt-4">
                    <img src={`https://starwars-visualguide.com/assets/img/planets/${planets?.uid}.jpg`} className="card-image-top"></img>
                    <div className="card-body">
                        <p className="card-title">{planets.properties.name}</p>
                        <p className="card-text">
                            Population: {planets.properties.population} <br />
                            Terrain: {planets.properties.terrain} <br />
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