import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { CharacterCard } from "../component/CharacterCard";

export const Home = () => (
	<div className="text-center mt-2">
		<h1>May the force be with you...</h1>
		<div>
			<CharacterCard/>
		</div>
		<div>
			Planets Cards
		</div>
		<div>
			Vehicles Cards
		</div>
	</div>
);
