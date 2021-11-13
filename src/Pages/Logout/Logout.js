import Button from "react-bootstrap";
import React from "react";
import useAuth from "../../Hook/uesAuth";
import { Link } from "react-router-dom";

const Logout = () => {
	const { logout } = useAuth();
	return (
		<div>
			log out
			<Link onClick={logout}>log out</Link>
		</div>
	);
};

export default Logout;
