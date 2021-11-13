import React, { useEffect, useState } from "react";
import { Card, Col, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import useAuth from "../../../../../Hook/uesAuth";

const MyOrders = () => {
	const { user } = useAuth();

	const [myOrder, setMyOrder] = useState([]);

	useEffect(() => {
		fetch(`https://polar-forest-25031.herokuapp.com/myOrders/${user?.email}`)
			.then((res) => res.json())
			.then((data) => setMyOrder(data));
	}, [user?.email]);

	const handelDelete = (id) => {
		console.log("click");
		const url = `https://polar-forest-25031.herokuapp.com/products/${id}`;
		fetch(url, {
			method: "DELETE",
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
			});
	};

	return (
		<div>
			<Row>
				<Col sm={6} className="p-5 mx-auto ">
					<h2 className="text-center shadow">
						MY <span className="text-danger">ORDERS</span>{" "}
					</h2>
				</Col>
			</Row>
			<Row>
				{myOrder?.map((order) => (
					<Col sm={4} lg={6} key={order._id}>
						<Card className=" shadow">
							<Card.Img
								className="mx-auto rounded-circle"
								style={{
									height: "12rem",
									width: "12rem",
								}}
								variant="top"
								src={order.img}
							/>
							<Card.Body>
								<Card.Title className="text-uppercase">
									{order.productName}
								</Card.Title>
								<Card.Text>{order.description}</Card.Text>
								<Card.Text>Price :{order.productPrice}</Card.Text>
								<Card.Text>Price :{order.color}</Card.Text>
								<Card.Text>id :{order._id}</Card.Text>
							</Card.Body>
							<Card.Footer></Card.Footer>
						</Card>
						<Button
							onClick={() => handelDelete(order._id)}
							style={{
								textDecoration: "none",
								color: "white",
							}}
						>
							cancel
						</Button>
					</Col>
				))}
			</Row>
		</div>
	);
};

export default MyOrders;
