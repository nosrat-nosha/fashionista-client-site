import React, { useEffect, useState } from "react";
import { Card, Col, Row, Button } from "react-bootstrap";

import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from "../../Hook/uesAuth";
import { stringify } from "@firebase/util";

const Purchase = () => {
	const { user } = useAuth();
	const initialInfo = {
		displayName: user.displayName,
		email: user.email,
		phone: "",
	};

	const { productId } = useParams();
	const [products, setProduct] = useState([]);
	const [bookingInfo, setBookingInfo] = useState(initialInfo);

	const handleOnBlur = (e) => {
		const field = e.target.name;
		const value = e.target.value;
		const newInfo = { ...bookingInfo };
		newInfo[field] = value;
		console.log(newInfo);
		setBookingInfo(newInfo);
	};

	useEffect(() => {
		fetch(`http://localhost:5000/products`)
			.then((res) => res.json())
			.then((data) => setProduct(data));
	}, []);
	const selected = products.find((product) => product._id === productId);

	const handelBookingSubmit = (e) => {
		//collect data
		const productData = {
			...bookingInfo,
			productName: selected?.type,
			productPrice: selected?.price,
			color: selected?.color,
			img: selected?.img,
			status: "pending",
		};
		console.log(productData);
		// send data to server
		fetch("http://localhost:5000/productsData", {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(productData),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.insertedId) {
					alert("data inserted");
				}
			});
		alert("place order");
		e.preventDefault();
	};

	return (
		<div>
			<Row>
				<Col lg={6} sm={4}>
					<Card className=" col-lg-8 col-sm-4 mx-auto mt-5 shadow">
						<Card.Img variant="top" className=" mx-auto " src={selected?.img} />
						<Card.Body>
							<Card.Title className="text-secondary fw-bold">
								{selected?.type}
							</Card.Title>
							<Card.Text>
								<br />
								<h4 className="text-danger">
									About This bag {selected?.name}:
								</h4>{" "}
								{selected?.description}
							</Card.Text>
							<Card.Text>
								<h4 className="text-danger">Price :</h4> {selected?.price}
							</Card.Text>
							<Card.Text>
								<h4 className="text-danger">Stock :</h4> {selected?.in_stoke}
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>
				<Col lg={6} sm={4} className="p-3">
					<h2 className="">USER DETAILS</h2>
					<form onSubmit={handelBookingSubmit}>
						<input
							className="form-control"
							name="displayName"
							defaultValue={user.displayName}
							onBlur={handleOnBlur}
							type="text"
							placeholder="name"
						/>{" "}
						<br />
						<input
							className="form-control"
							name="email"
							onBlur={handleOnBlur}
							defaultValue={user.email}
							type="email"
							placeholder="email"
						/>{" "}
						<br />
						<input
							className="form-control"
							type="phone"
							onBlur={handleOnBlur}
							name="phone"
							placeholder="phones"
						/>{" "}
						<br />
						<Button className="btn btn-danger" type="submit">
							{" "}
							Place Order
						</Button>
					</form>
				</Col>
			</Row>
		</div>
	);
};

export default Purchase;
