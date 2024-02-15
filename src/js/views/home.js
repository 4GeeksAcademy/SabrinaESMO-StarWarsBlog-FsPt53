import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { CharacterCard } from "../component/CharacterCard";

export const Home = () => {
	const { store, actions } = useContext(Context)
console.log(store.people)
	return (
		<div className="text-center mt-2">
			<h1>May the force be with you...</h1>
			<div className="card-container">
				{
					store.people.map((character, index) => {
						return (
							<div key={index}>
								<CharacterCard character={character}/>
							</div>
						)
					})
				}
			</div>
			<div>
				Planets Cards
			</div>
			<div>
				Vehicles Cards
			</div>
		</div>
	)
};
