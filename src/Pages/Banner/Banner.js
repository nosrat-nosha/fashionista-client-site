import React from "react";
import { Carousel, Col, Row, Button } from "react-bootstrap";
import "./Banner.css";
import img2 from "../../images/img2.jpg";
import img1 from "../../images/img1.jpg";
import img3 from "../../images/img3.jpg";
import { Link } from "react-router-dom";

const Banner = () => {
	return (
		<div className="container-fluid ">
			<Carousel>
				<Carousel.Item>
					<img
						className="d-block w-100"
						style={{
							height: "25rem",
						}}
						src={img2}
						alt="First slide"
					/>

					<Carousel.Caption>
						<h3>Best Online Bag Shop</h3>
						<p>Always provide best products to ous customer</p>
						<Button>
							<Link
								to="purchase"
								style={{
									textDecoration: "none",
									color: "white",
								}}
							>
								EXPLORE MORE
							</Link>
						</Button>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						style={{
							height: "25rem",
						}}
						src={img1}
						alt="Second slide"
					/>

					<Carousel.Caption>
						<h3>Best Online Bag Shop</h3>
						<p>Always provide best products to ous customer</p>
						<Button>
							<Link
								to="purchase"
								style={{
									textDecoration: "none",
									color: "white",
								}}
							>
								EXPLORE MORE
							</Link>
						</Button>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100 "
						style={{
							height: "25rem",
						}}
						src={img3}
						alt="Third slide"
					/>

					<Carousel.Caption>
						<h3>Best Online Bag Shop</h3>
						<p>Always provide best products to ous customer</p>

						<Button>
							<Link
								to="purchase"
								style={{
									textDecoration: "none",
									color: "white",
								}}
							>
								EXPLORE MORE
							</Link>
						</Button>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</div>
	);
};

export default Banner;
