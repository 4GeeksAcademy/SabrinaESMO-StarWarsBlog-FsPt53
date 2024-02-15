import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { CharacterCard } from "../component/CharacterCard";
import { PlanetCard } from "../component/PlanetCard";

export const Home = () => {
	const { store, actions } = useContext(Context)
console.log(store.people)
	return (
		<div className="text-center mt-2">
			<h3>May the force be with you...</h3>
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
			<div className="card-container">
				{
					store.planets.map((planets, index) => {
						return (
							<div key={index}>
								<PlanetCard planets={planets}/>
							</div>
						)
					})
				}
			</div>
			<div>
				Vehicles Cards
			</div>
		</div>
	)
};
