import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../Hook/uesAuth";
const MakeAdmin = () => {
	const { user } = useAuth();
	const [email, setEmail] = useState("");
	const { register, handleSubmit } = useForm();
	const onSubmit = (data) => {
		fetch("http://localhost:5000/makeAdmin", {
			method: "PUT",
			headers: { "content-type": "application/json" },
			body: JSON.stringify(data),
		})
			.then((res) => res.json())
			.then((res) => console.log(data));
	};

	return (
		<div>
			make admin
			<form onSubmit={handleSubmit(onSubmit)}>
				<input
					name="email"
					placeholder="email"
					value={user?.email}
					type="email"
					{...register("email")}
				/>

				{/* <input
					name="password"
					placeholder="password"
					{...register("password")}
				/> */}

				<input type="submit" value="make as admin" />
			</form>
		</div>
	);
};

export default MakeAdmin;
