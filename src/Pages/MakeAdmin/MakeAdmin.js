import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import useAuth from "../../Hook/uesAuth";
const MakeAdmin = () => {
	const { user } = useAuth();
	const [email, setEmail] = useState("");
	const { register, handleSubmit } = useForm();
	const onSubmit = (data) => {
		fetch("https://polar-forest-25031.herokuapp.com/makeAdmin", {
			method: "PUT",
			headers: { "content-type": "application/json" },
			body: JSON.stringify(data),
		})
			.then((res) => res.json())
			.then((res) => console.log(data));
	};

	return (
		<div>
			<Row>
				<Col className="mx-auto p-5" lg={6} sm={4}>
					<h2 className="shadow text-center p-5">MAKE ADMIN</h2>
				</Col>
			</Row>
			<Row>
				<Col lg={6} sm={4} className="mx-auto">
					<form onSubmit={handleSubmit(onSubmit)}>
						<input
							name="email"
							className="form-control"
							placeholder="email"
							// value={user?.email}
							type="email"
							{...register("email")}
						/>
						<br />
						<br />
						{/* <input
					name="password"
					placeholder="password"
					{...register("password")}
				/> */}

						<input
							className="btn btn-danger"
							type="submit"
							value="make as admin"
						/>
					</form>
				</Col>
			</Row>
		</div>
	);
};

export default MakeAdmin;
