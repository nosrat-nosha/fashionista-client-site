import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import useAuth from "../../Hook/uesAuth";
import user1 from "../../Pages/images/user1.png";
const User = () => {
	const { user, logout } = useAuth();
	return (
		<div>
			<div className="container">
				<Row>
					<Col lg={6} className="mx-auto ">
						<Card className="border-0 mx-auto" style={{ width: "8rem" }}>
							<Card.Img variant="top" src={user1} />
							<Card.Body>
								<Card.Title className="fs-6">{user?.email}</Card.Title>
								<Button className=" btn-danger " onClick={logout}>
									logout
								</Button>
								<br />
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</div>
		</div>
	);
};

export default User;
