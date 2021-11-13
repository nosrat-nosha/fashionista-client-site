import React from "react";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import Menu from "../Menu/Menu";
import Products from "../Products/Products";
import Review from "../Review/Review";

const Home = () => {
	return (
		<div>
			<Banner></Banner>
			<Products></Products>
			<Review></Review>
		</div>
	);
};

export default Home;
