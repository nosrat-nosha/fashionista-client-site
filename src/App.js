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

function App() {
	return (
		<div>
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
						<Route path="/explore">
							<Explore></Explore>
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
			</AuthProvider>
		</div>
	);
}

export default App;
