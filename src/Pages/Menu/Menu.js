import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../Hook/uesAuth";
import "./Menu.css";

const Menu = () => {
	const { user, logout } = useAuth();
	return (
		<div>
			<Navbar bg="dark" expand="sm">
				<Container>
					<Navbar.Brand className="text-uppercase text-danger fw-bold">
						Fashionista
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto">
							<Link className="nav-li fw-bold" to="/home">
								Home
							</Link>
							<Link className="nav-li  fw-bold" to="/explore">
								Explore
							</Link>
							<Link className="nav-li fw-bold" to="/purchase">
								Purchase
							</Link>
							<Link className="nav-li fw-bold" to="/registration">
								Registration
							</Link>

							{user?.email && (
								<Link className="nav-li fw-bold" to="/dashboard">
									Dashboard
								</Link>
							)}
							<Link className="nav-li  fw-bold" to="/login">
								Log In
							</Link>
							{user?.email && (
								<Link className="nav-li fw-bold" onClick={logout}>
									log out
								</Link>
							)}
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	);
};

export default Menu;
