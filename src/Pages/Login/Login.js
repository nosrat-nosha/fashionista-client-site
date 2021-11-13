import Button from "@restart/ui/esm/Button";
import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { useHistory, useLocation } from "react-router";
import { Link } from "react-router-dom";
import useAuth from "../../Hook/uesAuth";

const Login = () => {
	const { signInUsingGoogle, setUser, loginWithEmailAndPassword } = useAuth();
	const location = useLocation();
	const history = useHistory();
	const redirect_uri = location.state?.from || "/dashboard";
	const handelGoogleLogin = () => {
		signInUsingGoogle().then((result) => {
			history.push(redirect_uri);
		});
	};

	//sate
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	//function
	const handelGetEmail = (e) => {
		setEmail(e.target.value);
		console.log(e.target.value);
	};
	const handelGetPassword = (e) => {
		setPassword(e.target.value);
		console.log(e.target.value);
	};
	const handelLogin = (e) => {
		e.preventDefault();
		alert("Now You Are LOged In");
		loginWithEmailAndPassword(email, password)
			.then((result) => {
				// Signed in
				const user = result.user;
				console.log(user);
				history.push(redirect_uri);
				// ...
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
			});
	};
	return (
		<div className="mx-auto">
			<Row>
				<Col lg={6} sm={4} className="mx-auto">
					<h1 className="p-3">Log in</h1>
					<form onSubmit={handelLogin}>
						<input
							onBlur={handelGetEmail}
							className="form-control"
							type="email"
							placeholder="email"
						/>{" "}
						<br />
						<input
							onBlur={handelGetPassword}
							className="form-control"
							type="password"
							placeholder="password"
						/>{" "}
						<br />
						<input className="btn btn-danger" type="submit" />
					</form>
					<hr />
					<button onClick={handelGoogleLogin} className="btn btn-warning">
						Google Log In
					</button>
					<p>
						<span className="text-danger fw-bold">New user?</span>{" "}
						<Link to="/registration">Registration </Link>
					</p>
				</Col>
			</Row>
		</div>
	);
};

export default Login;
