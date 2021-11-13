import React from "react";
import { Alert, Col, Row } from "react-bootstrap";

const Footer = () => {
	return (
		<div>
			<div className="bg-dark">
				<hr />
				<div className="container-fluid  py-5">
					<Row>
						<Col lg={5} className="text-white">
							<div className="">
								<h4>FASHIONISTA</h4>
								<p className="text-muted">
									We always provide best bsgs to our customers,we always store
									best qualities of bags
								</p>
								<p className="  ">
									<i class="fas fa-phone-alt text-white  "></i>
									<p className="">012123-134-13</p>
									<i class="fas fa-map-marker-alt text-white"></i>
									<p className="">Dhaka,Bangladesh</p>
									<i class="fas fa-envelope text-white"></i>
									<p className="">fashionista.store@gmail.com</p>
								</p>
							</div>
						</Col>
						<Col lg={3}>
							<div className=" ">
								<h4 className="text-white">Links</h4>
								<Alert.Link className="text-muted " href="#">
									Home
								</Alert.Link>
								<br />
								<Alert.Link className="text-muted mt-3" href="#">
									Explore
								</Alert.Link>
								<br />
								<Alert.Link className="text-muted mt-3" href="#">
									Dashboard
								</Alert.Link>
								<br />
								<Alert.Link className="text-muted mt-3" href="#">
									Log In
								</Alert.Link>
							</div>
						</Col>
						<Col lg={4}>
							<div className="">
								<h4 className="text-white">Follow Us</h4>
								<p className="text-muted">Follow us to know more about us</p>
								<hr />

								<p className="  ">
									<i class="fab fa-facebook-f text-white p-2"></i>

									<i class="fab fa-instagram text-white  p-2"></i>

									<i class="fab fa-youtube text-white  p-2"></i>
									<i class="fab fa-linkedin  text-white p-2"></i>
								</p>
							</div>
						</Col>
						<hr />
						<p className="text-center">
							{" "}
							&copy; 2021 FASHIONISTA, All Rights Reserved
						</p>
					</Row>
				</div>
			</div>
		</div>
	);
};

export default Footer;
