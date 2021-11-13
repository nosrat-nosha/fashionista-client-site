import axios from "axios";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";

const AddReview = () => {
	const { register, handleSubmit, reset } = useForm();
	const onSubmit = (data) => {
		console.log(data);
		axios.post("http://localhost:5000/review", data).then((res) => {
			console.log(res);
			alert("successfully added");
			reset();
		});
	};
	return (
		<div>
			<Row>
				<Col sm={6} className="p-5 mx-auto ">
					<h2 className="text-center shadow">
						ADD YOUR <span className="text-danger">REVIEW</span>{" "}
					</h2>
				</Col>
			</Row>
			<Row>
				<Col lg={6} sm={4} className="p-3 mx-auto">
					<form onSubmit={handleSubmit(onSubmit)}>
						<input
							className="form-control"
							name="name"
							placeholder="name"
							{...register("name")}
						/>
						<br />
						<input
							className="form-control"
							name="email"
							placeholder="email"
							{...register("email")}
						/>
						<br />
						<input
							className="form-control"
							name="rating"
							placeholder="rating"
							{...register("rating")}
						/>
						<br />
						<textarea
							name="comment"
							className="form-control"
							placeholder="Comment"
							{...register("Comment")}
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

export default AddReview;
