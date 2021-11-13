import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ManageProducts = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		fetch(`http://localhost:5000/products`)
			.then((res) => res.json())
			.then((data) => setProducts(data));
	}, []);
	const handelDelete = (id) => {
		const proceed = window.confirm("Are you sure,you want to delete?");
		if (proceed) {
			const url = `http://localhost:5000/products/${id}`;
			fetch(url, {
				method: "DELETE",
			})
				.then((res) => res.json())
				.then((data) => {
					console.log(data);
					if (data.deletedCount) {
						alert("successfully deleted");
						const remainingProducts = products.filter(
							(product) => product._id !== id
						);
						setProducts(remainingProducts);
					}
				});
		}
	};
	return (
		<div>
			<Container>
				<Row>
					<Col sm={12}>
						<h2 className="text-center">OUR ALL PRODUCTS</h2>
					</Col>
				</Row>
				<Row className="grid  gy-4 gx-4">
					{products?.map((product) => (
						<Col sm={4} lg={6} key={product._id}>
							<Card className=" shadow">
								<Card.Img
									style={{
										height: "15rem",

										alignItems: "center",
									}}
									variant="top"
									src={product.img}
								/>
								<Card.Body>
									<Card.Title className="text-uppercase">
										{product.type}
									</Card.Title>
									<Card.Text>{product.description}</Card.Text>
									<Card.Text>color :{product.color}</Card.Text>
									<Card.Text>In Stoke :{product.in_stoke}</Card.Text>
									<Card.Text>Price :{product.price}</Card.Text>
								</Card.Body>
								<Card.Footer>
									<Button
										onClick={() => handelDelete(product._id)}
										style={{
											textDecoration: "none",
											color: "white",
										}}
									>
										Delete now
									</Button>
								</Card.Footer>
							</Card>
						</Col>
					))}
				</Row>
			</Container>
		</div>
	);
};

export default ManageProducts;
