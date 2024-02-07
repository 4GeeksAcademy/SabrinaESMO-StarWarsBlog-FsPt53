import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar bg-dark mb-3 p-3">
			<div className="container-fluid">
				<Link to="/">
					<span className="navbar-brand mb-0 h1 text-warning">Star Wars Blog by Sesmodev</span>
				</Link>
				
				<div>
					<button className="navbar-toggler" data-bs-toggle="collapse">
						Favorites
						<span className="navbar-toggler-icon"></span>
						<ul>
							<li><Link>Fav 1</Link></li>
							<li><Link>Fav 2</Link></li>
							<li><Link>Fav 3</Link></li>
						</ul>
					</button>
				</div>

				<form className="d-flex" role="search">
					<input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
					<button className="btn btn-outline-success" type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
				</form>
			</div>
		</nav>
	);
};
