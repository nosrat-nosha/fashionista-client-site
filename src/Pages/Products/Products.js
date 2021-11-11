import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Products.css";

const Products = () => {
	const [products, setProducts] = useState([]);
	useEffect(() => {
		fetch(`http://localhost:5000/products`)
			.then((res) => res.json())
			.then((data) => setProducts(data));
	}, []);

	return (
		<>
			<Container>
				<Row>
					<Col sm={12}>
						<h2 className="text-center">OUR BEST PRODUCTS</h2>
					</Col>
				</Row>
				<Row className="grid  gy-4 gx-4">
					{products?.slice(0, 6).map((product) => (
						<Col sm={4} key={product._id}>
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
									<Card.Title>{product.type}</Card.Title>
									<Card.Text>
										This is a wider card with supporting text below as a natural
										lead-in to additional content. This content is a little bit
										longer.
									</Card.Text>
								</Card.Body>
								<Card.Footer>
									<Button>
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
		</>
	);
};

export default Products;

// to={`/purchase/${product._id}`}
