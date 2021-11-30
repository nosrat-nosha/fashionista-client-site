import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Pages/Home/Home";

import Menu from "./Pages/Menu/Menu";

import Login from "./Pages/Login/Login";
import AuthProvider from "./Context/AuthProvider";
import Purchase from "./Pages/Purchase/Purchase";
import PrivateRout from "./PrivateRout/PrivateRout";
import Registration from "./Pages/Registration/Registration";
import Explore from "./Pages/Explore/Explore";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import MyOrders from "./Pages/Dashboard/Dashboard/Orders/MyOrders/MyOrders";
import Review from "./Pages/Review/Review";
import AddReview from "./Pages/Review/AddReview/AddReview";
import MakeAdmin from "./Pages/MakeAdmin/MakeAdmin";
import AddAProduct from "./Pages/AddAProduct/AddAProduct";
import ManageAllOrders from "./Pages/ManageAllOrders/ManageAllOrders";
import ManageProducts from "./Pages/ManageProducts/ManageProducts";
import Logout from "./Pages/Logout/Logout";
import Footer from "./Pages/Footer/Footer";
import Pay from "./Pages/Pay/Pay";

function App() {
	return (
		<div className="app">
			<AuthProvider>
				<Router>
					<Menu></Menu>

					<Switch>
						<Route exact path="/">
							<Home></Home>
						</Route>
						<Route path="/home">
							<Home></Home>
						</Route>
						<Route path="/pay">
							<Pay></Pay>
						</Route>
						<Route exact path="footer">
							<Footer></Footer>
						</Route>
						<Route path="/explore">
							<Explore></Explore>
						</Route>
						<Route path="/myOrders">
							<MyOrders></MyOrders>
						</Route>
						<Route path="/review">
							<Review></Review>
						</Route>
						<Route path="/makeAdmin">
							<MakeAdmin></MakeAdmin>
						</Route>
						<Route path="/addAProduct">
							<AddAProduct></AddAProduct>
						</Route>
						<Route path="/manageAllOrders">
							<ManageAllOrders></ManageAllOrders>
						</Route>
						<Route path="/ManageProducts">
							<ManageProducts></ManageProducts>
						</Route>
						<Route path="/Logout">
							<Logout></Logout>
						</Route>

						<Route path="/AddReview">
							<AddReview></AddReview>
						</Route>
						<PrivateRout path="/purchase/:productId">
							<Purchase></Purchase>
						</PrivateRout>
						<Route path="/dashboard">
							<Dashboard></Dashboard>
						</Route>
						<Route path="/login">
							<Login></Login>
						</Route>
						<Route path="/registration">
							<Registration></Registration>
						</Route>
						{/* <Route path="/Registration">
							<Registration></Registration>
						</Route> */}
					</Switch>
				</Router>
				<Footer></Footer>
			</AuthProvider>
		</div>
	);
}

export default App;
