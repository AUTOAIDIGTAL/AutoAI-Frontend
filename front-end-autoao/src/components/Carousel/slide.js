"use client";
import React from "react";
import { Button, Card } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const slide = () => {
	var settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,

	};

	const cardContent = [
		{
			image: "/assets/images/login/feature.png",
			tag: "Scheduled Tasks Made Easy",
			title: "Unlock the Power of Auto AI!",
			description:
				"With Auto AI, managing your workshop's tasks has never been simpler. Stay organized and on track with our intuitive scheduling system.",
		},
		{
			image: "/assets/images/login/feature.png",
			tag: "Scheduled Tasks Made Easy",
			title: "Unlock the Power of Auto AI!",
			description:
				"With Auto AI, managing your workshop's tasks has never been simpler. Stay organized and on track with our intuitive scheduling system.",
		},
		{
			image: "/assets/images/login/feature.png",
			tag: "Scheduled Tasks Made Easy",
			title: "Unlock the Power of Auto AI!",
			description:
				"With Auto AI, managing your workshop's tasks has never been simpler. Stay organized and on track with our intuitive scheduling system.",
		},
	];

	return (
		<>
			<Slider className="bullet-style-1" {...settings}>
				{cardContent.map((card, index) => (
					<div key={index}>
						<Card className="border-0 bg-transparent">
							<Card.Img variant="top" src={card.image} />
							<Card.Body>
								<span className="bg-primary-light-sec py-2 px-3 rounded text-primary fs-6 mt-2 mb-4 d-inline-block">{card.tag ? card.tag : ''}</span>
								<Card.Title className="fs-4">{card.title}</Card.Title>
								<Card.Text>{card.description}</Card.Text>
							</Card.Body>
						</Card>
					</div>
				))}
			</Slider>

		</>
	);
};

export default slide;
