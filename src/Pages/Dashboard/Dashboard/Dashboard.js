import React from "react";
import {
	Form,
	FormControl,
	Nav,
	NavDropdown,
	Button,
	Navbar,
	Container,
	Offcanvas,
} from "react-bootstrap";
import { Route, Switch, useRouteMatch } from "react-router";
import { Link } from "react-router-dom";
import AddAProduct from "../../AddAProduct/AddAProduct";
import Logout from "../../Logout/Logout";
import MakeAdmin from "../../MakeAdmin/MakeAdmin";
import ManageAllOrders from "../../ManageAllOrders/ManageAllOrders";
import ManageProducts from "../../ManageProducts/ManageProducts";
import AddReview from "../../Review/AddReview/AddReview";
import MyOrders from "./Orders/MyOrders/MyOrders";

const Dashboard = () => {
	let { path, url } = useRouteMatch();
	return (
		<div>
			<Navbar bg="light" expand={false}>
				<Container fluid>
					<Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand>
					<Navbar.Toggle aria-controls="offcanvasNavbar" />
					<Navbar.Offcanvas
						id="offcanvasNavbar"
						aria-labelledby="offcanvasNavbarLabel"
						placement="end"
					>
						<Offcanvas.Header closeButton>
							<Offcanvas.Title id="offcanvasNavbarLabel">
								Offcanvas
							</Offcanvas.Title>
						</Offcanvas.Header>
						<Offcanvas.Body>
							<Nav className="justify-content-end flex-grow-1 pe-3">
								<Link to={`${url}/MyOrders`}>
									<li>My Orders</li>
								</Link>

								<Link to={`${url}/AddReview`}>
									<li>Add Reviews</li>
								</Link>
								<Link to={`${url}/MakeAdmin`}>
									<li>Make Admin</li>
								</Link>
								<Link to={`${url}/ManageAllOrders`}>
									<li>Manage All Orders</li>
								</Link>
								<Link to={`${url}/AddAProduct`}>
									<li>Add A Product</li>
								</Link>
								<Link to={`${url}/ManageProducts`}>
									<li>Manage Products</li>
								</Link>
								<Link to={`${url}/logout`}>
									<li>Log Out</li>
								</Link>
								<NavDropdown title="Dropdown" id="offcanvasNavbarDropdown">
									<NavDropdown.Item href="#action3">Action</NavDropdown.Item>
									<NavDropdown.Item href="#action4">
										Another action
									</NavDropdown.Item>
									<NavDropdown.Divider />
									<NavDropdown.Item href="#action5">
										Something else here
									</NavDropdown.Item>
								</NavDropdown>
							</Nav>
							<Form className="d-flex">
								<FormControl
									type="search"
									placeholder="Search"
									className="me-2"
									aria-label="Search"
								/>
								<Button variant="outline-success">Search</Button>
							</Form>
						</Offcanvas.Body>
					</Navbar.Offcanvas>
				</Container>
			</Navbar>
			<div>
				<Switch>
					<Route exact path={`${path}/MyOrders`}>
						<MyOrders></MyOrders>
					</Route>
					<Route exact path={`${path}/AddReview`}>
						<AddReview></AddReview>
					</Route>
					<Route exact path={`${path}/MakeAdmin`}>
						<MakeAdmin></MakeAdmin>
					</Route>
					<Route exact path={`${path}/AddAProduct`}>
						<AddAProduct></AddAProduct>
					</Route>
					<Route exact path={`${path}/ManageProducts`}>
						<ManageProducts></ManageProducts>
					</Route>
					<Route exact path={`${path}/ManageAllOrders`}>
						<ManageAllOrders></ManageAllOrders>
					</Route>
					<Route exact path={`${path}/Logout`}>
						<Logout></Logout>
					</Route>
				</Switch>
			</div>
		</div>
	);
};

export default Dashboard;
