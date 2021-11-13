import React, { useEffect, useState } from "react";
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
import useAuth from "../../../Hook/uesAuth";
import AddAProduct from "../../AddAProduct/AddAProduct";
import Home from "../../Home/Home";
import Logout from "../../Logout/Logout";
import MakeAdmin from "../../MakeAdmin/MakeAdmin";
import ManageAllOrders from "../../ManageAllOrders/ManageAllOrders";
import ManageProducts from "../../ManageProducts/ManageProducts";
import Pay from "../../Pay/Pay";
import AddReview from "../../Review/AddReview/AddReview";
import User from "../../User/User";
import MyOrders from "./Orders/MyOrders/MyOrders";

const Dashboard = () => {
	let { path, url } = useRouteMatch();
	const { user } = useAuth();
	const [isAdmin, setIsAdmin] = useState(false);
	useEffect(() => {
		fetch(`https://polar-forest-25031.herokuapp.com/checkAdmin/${user?.email}`)
			.then((res) => res.json())
			.then((data) => {
				if (data[0]?.role === "admin") {
					setIsAdmin(true);
				} else {
					setIsAdmin(false);
				}
			});
	}, [user?.email]);
	console.log(isAdmin);
	return (
		<div>
			<Navbar bg="light" expand={false}>
				<Container fluid>
					<Navbar.Brand href="#">{/* <User></User> */}</Navbar.Brand>
					<Navbar.Toggle aria-controls="offcanvasNavbar" />
					<Navbar.Offcanvas
						id="offcanvasNavbar"
						aria-labelledby="offcanvasNavbarLabel"
						placement="end"
					>
						<Offcanvas.Header closeButton>
							<Offcanvas.Title id="offcanvasNavbarLabel">Admin</Offcanvas.Title>
						</Offcanvas.Header>
						<Offcanvas.Body>
							<User></User>
							<Nav bg="dark" className="justify-content-end flex-grow-1 pe-3">
								<Link className="nav-li text-dark fw-bold" to={`${url}/User`}>
									<li>User Profile</li>
								</Link>
								<Link className="nav-li text-dark fw-bold" to={`${url}/Home`}>
									<li>Home</li>
								</Link>
								<Link
									className="nav-li text-dark  fw-bold"
									to={`${url}/MyOrders`}
								>
									<li>My Orders</li>
								</Link>
								<Link
									className="nav-li text-dark fw-bold"
									to={`${url}/MyOrders`}
								>
									<li>My Orders</li>
								</Link>
								<Link className="nav-li text-dark fw-bold" to={`${url}/Pay`}>
									<li>Pay</li>
								</Link>

								<Link
									className="nav-li text-dark fw-bold"
									to={`${url}/AddReview`}
								>
									<li>Add Reviews</li>
								</Link>
								<br />
								<hr />
								<br />
								{isAdmin && (
									<>
										<Link
											className="nav-li text-dark fw-bold"
											to={`${url}/MakeAdmin`}
										>
											<li>Make Admin</li>
										</Link>
										<Link
											className="nav-li text-dark fw-bold"
											to={`${url}/ManageAllOrders`}
										>
											<li>Manage All Orders</li>
										</Link>
										<Link
											className="nav-li  text-dark fw-bold"
											to={`${url}/AddAProduct`}
										>
											<li>Add A Product</li>
										</Link>
										<Link
											className="nav-li text-dark fw-bold"
											to={`${url}/ManageProducts`}
										>
											<li>Manage Products</li>
										</Link>
										<Link
											className="nav-li text-dark fw-bold"
											to={`${url}/logout`}
										>
											<li>Log Out</li>
										</Link>
									</>
								)}
							</Nav>
						</Offcanvas.Body>
					</Navbar.Offcanvas>
				</Container>
			</Navbar>
			<div>
				<Switch>
					<Route exact path={`${path}/user`}>
						<User></User>
					</Route>
					<Route exact path={`${path}/Home`}>
						<Home></Home>
					</Route>
					<Route exact path={`${path}/MyOrders`}>
						<MyOrders></MyOrders>
					</Route>
					<Route exact path={`${path}/Pay`}>
						<Pay></Pay>
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
			<div className=""></div>
		</div>
	);
};

export default Dashboard;
