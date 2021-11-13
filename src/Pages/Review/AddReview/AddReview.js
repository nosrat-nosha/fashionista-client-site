import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";

const AddReview = () => {
	const { register, handleSubmit, reset } = useForm();
	const onSubmit = (data) => {
		console.log(data);
		axios.post("http://localhost:5000/review").then((res) => {
			console.log(res);
		});
	};
	return (
		<div>
			Review
			<form onSubmit={handleSubmit(onSubmit)}>
				<input name="img" placeholder="img" {...register("img")} />
				<br />
				<input name="name" placeholder="name" {...register("name")} />
				<br />
				<textarea
					name="comment"
					placeholder="comment"
					{...register("comment")}
				/>
				<br />
				<input
					name="rating"
					placeholder="rating"
					type="number"
					{...register("rating")}
				/>
				<br />
				<input type="submit" />
			</form>
		</div>
	);
};

export default AddReview;
