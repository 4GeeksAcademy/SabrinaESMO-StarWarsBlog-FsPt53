import React, { Component } from "react";

export const CharacterCard = (props) => {
    const { characterImage, characterName, characterPreview } = props;
    return (
        <div>
            <div className="card" style="width: 18rem;">
                <img src={characterImage} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{characterName}</h5>
                    <p className="card-text">{characterPreview}</p>
                </div>
                <button>Details</button>
                <button>Add to favs</button>
            </div>
        </div>
    );
};