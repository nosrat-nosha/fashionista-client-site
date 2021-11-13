import React, { useEffect, useState } from "react";
import { Card, Col, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import useAuth from "../../../../../Hook/uesAuth";

const MyOrders = () => {
	const { user } = useAuth();

	const [myOrder, setMyOrder] = useState([]);

	useEffect(() => {
		fetch(`http://localhost:5000/myOrders/${user?.email}`)
			.then((res) => res.json())
			.then((data) => setMyOrder(data));
	}, [user?.email]);

	const handelDeleteOrder = (id) => {
		fetch(`http://localhost:5000/products/${id}`, {
			method: "DELETE",
		})
			.then((res) => res.json())
			.then((data) => {
				setMyOrder(data);
			});
	};

	return (
		<div>
			<h2>my orders {myOrder.length}</h2>
			<Row>
				{myOrder?.map((order) => (
					<Col sm={4} lg={6} key={order._id}>
						<Card className=" shadow">
							<Card.Img
								style={{
									height: "15rem",

									alignItems: "center",
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
							onClick={() => handelDeleteOrder(order._id)}
							style={{
								textDecoration: "none",
								color: "white",
							}}
						>
							Cancel Order
						</Button>
					</Col>
				))}
			</Row>
		</div>
	);
};

export default MyOrders;
