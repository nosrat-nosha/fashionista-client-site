import axios from "axios";
import React from "react";

import { Card, Col, Row, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const AddAProduct = () => {
	const { register, handleSubmit, reset } = useForm();
	const onSubmit = (data) => {
		axios
			.post(`https://polar-forest-25031.herokuapp.com/products`, data)
			.then((res) => {
				if (res.data.insertedId) {
					alert("successfully Added");
					reset();
				}
			});
		console.log(data);
	};
	return (
		<div>
			<Row>
				<Col sm={6} className="p-5 mx-auto ">
					<h2 className="text-center shadow">
						ADD A <span className="text-danger">PRODUCT</span>{" "}
					</h2>
				</Col>
			</Row>
			<Row>
				<Col lg={8} sm={4} className="mx-auto p-3">
					<form onSubmit={handleSubmit(onSubmit)}>
						<input
							placeholder="img"
							required
							className="form-control"
							type="text"
							{...register("img")}
						/>
						<br />

						<input
							placeholder="type"
							required
							className="form-control"
							type="text"
							{...register("type")}
						/>
						<br />
						<textarea
							placeholder="description"
							required
							className="form-control"
							type="text"
							{...register("description")}
						/>
						<br />
						<input
							placeholder="color"
							required
							className="form-control"
							type="text"
							{...register("color")}
						/>
						<br />
						<input
							placeholder="in_stoke"
							required
							className="form-control"
							type="number"
							{...register("in_stoke")}
						/>
						<br />
						<input
							placeholder="price"
							required
							className="form-control"
							type="text"
							{...register("price")}
						/>
						<br />

						<br />
						<input className="btn btn-danger" type="submit" />
					</form>
				</Col>
			</Row>
		</div>
	);
};

export default AddAProduct;
