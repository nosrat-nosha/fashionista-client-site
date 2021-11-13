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
		fetch("https://polar-forest-25031.herokuapp.com/allOrders").then((res) =>
			res.json().then((data) => serOrders(data))
		);
	}, []);
	console.log(orders);
	//hook
	const { register, handleSubmit } = useForm();
	const onSubmit = (data) => console.log(data);
	return (
		<div>
			<Row>
				<Col sm={6} className="p-5 mx-auto ">
					<h2 className="text-center shadow">
						MANAGE ALL<span className="text-danger">PRODUCTS</span>{" "}
					</h2>
				</Col>
			</Row>
			<Row>
				{orders?.map((order) => (
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
