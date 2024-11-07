import React from "react";
//logo
import logo from "../../img/Logo.jpg"

const Navbar = () => {
	return (

		<nav className="navbar navbar-expand-lg bg-dark menu-fix pb-1 p-2">
			<div className="container-fluid justify-content-between">
				<div className="d-flex">
					<div><img  className="logo" src={logo} /></div>
				<p className="navbar-brand text-light my-1">MONSTER HUNTER RISE</p>
				<button className="navbar-toggler text-light bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon text-light"></span>
				</button>
				</div>
				<div>
				<div className="collapse navbar-collapse text-light" id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item">
							<a className="nav-link active text-light" aria-current="page" href="#">Home</a>
						</li>
						<li className="nav-item">
							<a className="nav-link text-light" href="#">About monsters</a>
						</li>
						<li className="nav-item">
							<a className="nav-link text-light" href="#">About clases</a>
						</li>
					</ul>
				</div>
			</div>
			</div>
		</nav>
	)
}
export default Navbar;
