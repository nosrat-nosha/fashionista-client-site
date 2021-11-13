import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row, Button, CardGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Products.css";
import user from "../../Pages/images/user1.png";

const Products = () => {
	const [products, setProducts] = useState([]);
	useEffect(() => {
		fetch(`https://polar-forest-25031.herokuapp.com/products`)
			.then((res) => res.json())
			.then((data) => setProducts(data));
	}, []);

	return (
		<>
			<Container>
				<Row>
					<Col sm={6} className="p-5 mx-auto ">
						<h2 className="text-center shadow">
							OUR BEST <span className="text-danger"> PRODUCTS</span>{" "}
						</h2>
					</Col>
				</Row>
				<Row className="grid  gy-4 gx-4">
					{products?.slice(0, 6).map((product) => (
						<Col sm={4} key={product._id}>
							<Card className=" shadow">
								<Card.Img
									className="mx-auto rounded-circle"
									style={{
										height: "12rem",
										width: "12rem",
									}}
									src={product.img}
								/>
								<Card.Body>
									<Card.Title>{product.type}</Card.Title>
									<Card.Text>
										This is a wider card with supporting text below as a natural
										lead-in to additional content. This content is a little bit
										longer.
									</Card.Text>
								</Card.Body>
								<Card.Footer>
									<Button className="btn btn-danger">
										<Link
											to={`/purchase/${product._id}`}
											style={{
												textDecoration: "none",
												color: "white",
											}}
										>
											ORDER NOW
										</Link>
									</Button>
								</Card.Footer>
							</Card>
						</Col>
					))}
				</Row>
			</Container>

			<div className="team-container">
				<h2 className="p-5 text-warning">Our Team Members</h2>
				<CardGroup className="bg-warning p-5 g-4 shadow-lg">
					<Card>
						<Card.Img variant="top" className="w-50 mx-auto p-3" src={user} />
						<Card.Body>
							<Card.Title>Founder</Card.Title>
							<Card.Text>Name: Adam Smith</Card.Text>
						</Card.Body>
					</Card>
					<Card>
						<Card.Img variant="top" className="w-50 mx-auto p-3" src={user} />
						<Card.Body>
							<Card.Title>Co-Founder</Card.Title>
							<Card.Text>Name: juliana smith</Card.Text>
						</Card.Body>
					</Card>
					<Card>
						<Card.Img variant="top" className="w-50 mx-auto p-3" src={user} />
						<Card.Body>
							<Card.Title>Manager</Card.Title>
							<Card.Text>Name: wiliam Hary</Card.Text>
						</Card.Body>
					</Card>
				</CardGroup>
				<hr />
			</div>
		</>
	);
};

export default Products;

// to={`/purchase/${product._id}`}
