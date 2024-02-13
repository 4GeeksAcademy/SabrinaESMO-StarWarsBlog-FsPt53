import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import FotoPrueba from "../../img/aura.jpg"



export const CharacterCard = () => (
    <div className="row justify-content-center">
        <div className="card mx-3 mb-5 mt-4">
            <img src={FotoPrueba} className="card-image-top"></img>
            <div className="card-body">
                <p className="card-title">R2-D2</p>
                <p className="card-text">Color de ojos: metálico. <br/> Color de pelo: metálico. <br/> Género: Androide. </p>
            </div>
            <div className="d-flex justify-content-around my-2">
                <button className="card-button py-1 px-3">Details</button>
                <button className="card-fav py-1 px-3"><i class="fa-regular fa-star"></i></button>
            </div>
        </div>
    </div>
);






// export const CharacterCard = (props) => {
//     const { characterImage, characterName, characterPreview } = props;
//     const { store, actions } = useContext(Context);
//     const navigate = useNavigate();


//     return (
//         <div>
//             {/* {
//                 store.people.map((data) => {
//                     return (
//                         <li key={data.id}>
//                             <p>{data.name}</p>
//                         </li>
//                     )
//                 })
//             } */}
//             {/* <div className="card" style="width: 18rem;">
//                 <img src={characterImage} className="card-img-top" alt="..." />
//                 <div className="card-body">
//                     <h5 className="card-title">{characterName}</h5>
//                     <p className="card-text">{characterPreview}</p>
//                 </div>
//                 <button>Details</button>
//                 <button>Add to favs</button>
//             </div> */}
//         </div>
//     );
// };