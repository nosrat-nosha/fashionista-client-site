import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Explore = () => {
	const [products, setProducts] = useState([]);
	useEffect(() => {
		fetch(`https://polar-forest-25031.herokuapp.com/products`)
			.then((res) => res.json())
			.then((data) => setProducts(data));
	}, []);
	return (
		<div>
			<>
				<Container>
					<Col sm={6} className="p-5 mx-auto ">
						<h2 className="text-center shadow">
							<span className="text-danger"> EXPLORE</span> ALL PRODUCTS{" "}
						</h2>
					</Col>
					<Row className="grid  gy-4 gx-4">
						{products?.map((product) => (
							<Col sm={4} lg={6} key={product._id}>
								<Card className=" shadow">
									<Card.Img
										style={{
											height: "18rem",

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
										<Button className="btn btn-danger">
											<Link
												to="purchase"
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
		</div>
	);
};

export default Explore;
