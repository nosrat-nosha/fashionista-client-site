import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

import {
	getAuth,
	signInWithPopup,
	GoogleAuthProvider,
	onAuthStateChanged,
	signOut,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
} from "firebase/auth";
initializeAuthentication();
const useFirebase = () => {
	const auth = getAuth();
	const provider = new GoogleAuthProvider();
	const [user, setUser] = useState({});
	const [error, setError] = useState("");
	const signInUsingGoogle = () => {
		return signInWithPopup(auth, provider);
	};
	//google log Out
	const logout = () => {
		signOut(auth)
			.then(() => {
				setUser({});
			})
			.catch((error) => {});
	};
	//registration
	const createAccount = (email, password) => {
		console.log(email, password);
		return createUserWithEmailAndPassword(auth, email, password);
	};

	//log in with email password
	const loginWithEmailAndPassword = (email, password) => {
		return signInWithEmailAndPassword(auth, email, password);
	};
	// hold state
	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				console.log("state change", user);
				setUser(user);
				// ...
			} else {
			}
		});
	}, []);
	//send data database
	const handelUserInfoRegister = (email) => {
		fetch("https://polar-forest-25031.herokuapp.com/users", {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify({ email }),
		})
			.then((res) => res.json())
			.then((result) => console.log(result));
	};

	return {
		user,
		error,
		signInUsingGoogle,
		logout,
		createAccount,
		loginWithEmailAndPassword,
		handelUserInfoRegister,
	};
};
export default useFirebase;
