import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar bg-dark mb-3 p-3">
			<div className="container-fluid ">
				<Link to="/">
					<span className="navbar-brand mb-0 h1 text-warning">Star Wars Blog by Sesmodev</span>
				</Link>
				<div className="d-flex justify-content-end">
					<div className="dropdown pe-5">
						<a className="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
							Favoritos
						</a>
						<ul className="dropdown-menu">
							<li><a className="dropdown-item" href="#">Un favorito chachi</a></li>
							<li><a className="dropdown-item" href="#">Otro favorito guay</a></li>
							<li><a className="dropdown-item" href="#">Favorito estupendo</a></li>
						</ul>
					</div>

					<form className="d-flex" role="search">
						<input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
						<button className="btn btn-outline-success" type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
					</form>

				</div>
			</div>
		</nav>
	);
};
