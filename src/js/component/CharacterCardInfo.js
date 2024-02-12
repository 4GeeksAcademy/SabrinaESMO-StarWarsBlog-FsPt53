import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const CharacterCardInfo = () => {
    const {characters, store, actions} = useContext(Context);
    
    return (
        <div>
        {
        characters.map((data) => {
            return (
                <li key={data.id}>
                    <p>{data.name}</p>
                    <p>{data.eye_color}</p>
                    <p>{data.hair_color}</p>
                </li>
            )
        })}
    </div>
);
}