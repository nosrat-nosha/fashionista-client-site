import Button from "@restart/ui/esm/Button";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../Hook/uesAuth";

const Menu = () => {
	const { user, logout } = useAuth();
	return (
		<div>
			<Navbar bg="light" expand="md">
				<Container>
					<Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto">
							<Link to="/home">Home</Link>
							<Link to="/explore">Explore</Link>
							<Link to="/purchase">Purchase</Link>
							<Link to="registration">Registration</Link>
							<Link to="login">Log IN</Link>
							{user?.email && <Link to="/dashboard">Dashboard</Link>}
							{user?.email && <Button onClick={logout}>log out</Button>}
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	);
};

export default Menu;
