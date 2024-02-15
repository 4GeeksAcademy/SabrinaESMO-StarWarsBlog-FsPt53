import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { useParams } from "react-router";

export const CharacterDetails = () => {
    const params = useParams()
    const {actions, store} = useContext(Context)
    
    useEffect(() => {
        actions.getCharacter(params.id)
    },[])

    return

}

    <div className="character">
        HOLA
    </div>

    // <div className="card_test card mb-3" style="max-width: 540px;">
    //     <div className="row g-0">
    //         <div className="col-md-4">
    //             <img src={rigoImage} className="img-fluid rounded-start" alt="..." />
    //         </div>
    //         <div className="col-md-8">
    //             <div className="card-body">
    //                 <h5 className="card-title">Card title</h5>
    //                 <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    //                 <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
    //             </div>
    //         </div>
    //     </div>
    // </div>
);