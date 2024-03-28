import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import altimg from "../../img/rigo-baby.jpg"


export const VehicleCard = (props) => {

    const { store, actions } = useContext(Context)

    useEffect(() => {
        actions.addDetailToVehicles(props.vehicles?.uid)
    }, []
    )

    return (
        <div>
            <div className="row justify-content-center mx-1">
                <div className="card mx-3 mb-5 mt-4">
                    <img src={`https://starwars-visualguide.com/assets/img/vehicles/${props.vehicles?.uid}.jpg`} className="card-image-top" alt={altimg}></img>
                    <div className="card-body">
                        <p className="card-title">{props.vehicles?.name}</p>
                        <p className="card-text">
                            Model: {props.vehicles?.properties?.model} <br />
                            Vehicle class: {props.vehicles?.properties?.vehicle_class} <br />
                            Passengers: {props.vehicles?.properties?.passengers}
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