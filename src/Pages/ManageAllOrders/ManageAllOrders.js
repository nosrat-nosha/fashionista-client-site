import Dropdown from "@restart/ui/esm/Dropdown";
import React, { useEffect, useState } from "react";
import {
	Card,
	Button,
	Row,
	Col,
	DropdownButton,
	ButtonGroup,
} from "react-bootstrap";
import useAuth from "../../Hook/uesAuth";
import { useForm } from "react-hook-form";

const ManageAllOrders = () => {
	const [orders, serOrders] = useState([]);
	const { user } = useAuth();
	useEffect(() => {
		fetch("http://localhost:5000/allOrders").then((res) =>
			res.json().then((data) => serOrders(data))
		);
	}, []);
	console.log(orders);
	//hook
	const { register, handleSubmit } = useForm();
	const onSubmit = (data) => console.log(data);
	return (
		<div>
			<h2>my orders {orders.length}</h2>
			<Row>
				{orders?.map((order) => (
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
								<Card.Text>Email: {order?.email}</Card.Text>
								<Card.Text>{order.description}</Card.Text>
								<Card.Text>Price :{order.productPrice}</Card.Text>
								<Card.Text>Price :{order.color}</Card.Text>
								<Card.Text>id :{order._id}</Card.Text>
								<Card.Text>
									{" "}
									<form onSubmit={handleSubmit(onSubmit)}>
										<select {...register("pending")}>
											<option value={order.status}>{order.status}</option>
											<option value="shipped">shipped</option>
										</select>
									</form>
								</Card.Text>
							</Card.Body>
							<Card.Footer></Card.Footer>
						</Card>
					</Col>
				))}
			</Row>
		</div>
	);
};

export default ManageAllOrders;
