import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { CharacterCard } from "../component/CharacterCard";
import { PlanetCard } from "../component/PlanetCard";
import { VehicleCard } from "../component/VehicleCard";

export const Home = () => {
	const { store, actions } = useContext(Context)
	return (
		<div className="text-center mt-2">
			<h1>MAY THE FORCE BE WITH YOU...</h1>
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
			<div className="card-container">
				{
					store.vehicles.map((vehicles, index) => {
						return (
							<div key={index}>
								<VehicleCard vehicles={vehicles}/>
							</div>
						)
					})
				}
			</div>
		</div>
	)
};
