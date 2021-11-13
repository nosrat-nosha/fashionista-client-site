import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import useAuth from "../../Hook/uesAuth";
import user2 from "../../Pages/images/user.png";
import Rating from "react-rating";
const Review = () => {
	const [reviews, setReviews] = useState([]);
	const { user } = useAuth();
	useEffect(() => {
		fetch(`https://polar-forest-25031.herokuapp.com/review`)
			.then((res) => res.json())
			.then((data) => setReviews(data));
	}, []);
	return (
		<div className="container-fluid">
			<Col sm={6} className="p-5 mx-auto ">
				<h2 className="text-center shadow">
					OUR CUSTOMERS <span className="text-danger"> REVIEWS</span>{" "}
				</h2>
			</Col>
			<Row>
				{reviews?.map((review) => (
					<Col sm={4} lg={4} key={review._id}>
						<Card className=" shadow  text-center">
							<Card.Img
								className="mx-auto mt-3 rounded-circle w-25 h-25"
								src={user2}
							/>
							<Card.Body>
								<Card.Title className="text-uppercase">
									{review.name}
								</Card.Title>
								<Card.Text>Email :{review.email}</Card.Text>
								<Card.Text>Rating :{review.rating}</Card.Text>
								<Card.Text>Rating :{review.rating}</Card.Text>

								<Card.Text>
									<Rating></Rating>
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

export default Review;
