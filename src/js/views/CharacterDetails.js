import React, { useEffect, useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { useParams } from "react-router";

export const CharacterDetails = () => {
    const { uid } = useParams();
    const { actions, store } = useContext(Context);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchCharacterDetails = async () => {
            try {
                await actions.addDetailToCharacters(uid);
                setIsLoading(false);
            } catch (error) {
                console.error("Error al obtener los datos del personaje", error);
            }
        };

        fetchCharacterDetails();
    }, [uid, actions]);

    return (
        <div>
            <div className="card-body">
                {isLoading ? (
                    <p>Wait a second, please...</p>
                ) : (
                    <>
                        {store.characterDetails ? (
                            <>
                                <p className="card-title">{store.characterDetails.properties.name}</p>
                                <p className="card-text">Hair Color: {store.characterDetails.properties.hair_color}</p>
                                {/* Agrega más propiedades del personaje aquí */}
                            </>
                        ) : (
                            <p>Parece que el personaje es tímido y no quiere mostrar sus detalles...</p>
                        )}
                    </>
                )}
            </div>
        </div>
    );
};