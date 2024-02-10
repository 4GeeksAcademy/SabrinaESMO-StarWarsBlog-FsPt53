import React, { Component } from "react";
import Foto1 from "../../img/aura.jpg"

export const CharacterCard = () => (
    <div>
        <div className="card" style="width: 18rem;">
            <img src={Foto1} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
        </div>
    </div>
);