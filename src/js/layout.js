import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import injectContext from "./store/appContext";

import { Home } from "./views/home";
import { Single } from "./views/single";
import { CharacterDetails } from "./views/CharacterDetails";
import { PlanetDetails } from "./views/PlanetDetails";
import { VehicleDetails } from "./views/VehicleDetails";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/character/:uid" element={<CharacterDetails/>} />
						<Route path="/planet/:uid" element={<PlanetDetails/>} />
						<Route path="/vehicle/:uid" element={<VehicleDetails/>} />
						<Route path="/single/:theid" element={<Single />} />
						<Route path="*" element={<h1>Página no encontrada</h1>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
