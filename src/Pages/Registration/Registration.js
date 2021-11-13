import React, { useState } from "react";
import { useHistory, useLocation } from "react-router";
import { Link } from "react-router-dom";
import useAuth from "../../Hook/uesAuth";

const Registration = () => {
	const { signInUsingGoogle, createAccount, handelUserInfoRegister } =
		useAuth();
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
	const handelRegistration = (e) => {
		e.preventDefault();
		alert("registration done");
		createAccount(email, password)
			// .then((userCredential) => {
			// 	const newUser = { email, displayName: name };
			// 	setUser(email, name);
			// 	//save user database
			// 	saveUser(email);
			// })
			.then((result) => {
				// Signed in

				console.log(result.user);
				handelUserInfoRegister(result.user.email);

				history.push(redirect_uri);
				// ...
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				// ..
			});
	};
	return (
		<div className="text-center">
			<h1>Registration</h1>
			<form onSubmit={handelRegistration}>
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
			<p>already registerd</p>
			<Link to="/login"> log in </Link>
		</div>
	);
};

export default Registration;
