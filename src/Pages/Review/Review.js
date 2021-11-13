import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";

const Review = () => {
	const [reviews, setReviews] = useState([]);
	useEffect(() => {
		fetch(`http://localhost:5000/review`)
			.then((res) => res.json())
			.then((data) => setReviews(data));
	}, []);
	return (
		<div>
			<h2>Reviews {reviews.length}</h2>
			<Row>
				{reviews?.map((review) => (
					<Col sm={4} lg={4} key={review._id}>
						<Card className=" shadow">
							<Card.Img
								style={{
									height: "15rem",

									alignItems: "center",
								}}
								variant="top"
								src={review.img}
							/>
							<Card.Body>
								<Card.Title className="text-uppercase">
									{review.name}
								</Card.Title>
								<Card.Text>Review :{review._id}</Card.Text>
								<Card.Text>Review :{review.rating}</Card.Text>

								<Card.Text>Comment :{review.description}</Card.Text>
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
