import Button from "@restart/ui/esm/Button";
import React, { useState } from "react";
import { useHistory, useLocation } from "react-router";
import { Link } from "react-router-dom";
import useAuth from "../../Hook/uesAuth";

const Login = () => {
	const { signInUsingGoogle, setUser, loginWithEmailAndPassword } = useAuth();
	const location = useLocation();
	const history = useHistory();
	const redirect_uri = location.state?.from || "/home";
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
		<div className="text-center">
			<h1>Log in</h1>
			<form onSubmit={handelLogin}>
				<input onBlur={handelGetEmail} type="email" placeholder="email" />{" "}
				<br />
				<input
					onBlur={handelGetPassword}
					type="password"
					placeholder="password"
				/>{" "}
				<br />
				<input type="submit" />
			</form>

			<button onClick={handelGoogleLogin} className="btn btn-warning">
				Google Log In
			</button>
			<p>New User ?</p>
			<Link to="/registration">Registration </Link>
		</div>
	);
};

export default Login;
