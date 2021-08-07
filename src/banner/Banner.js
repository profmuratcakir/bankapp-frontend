import React from "react";
import Banner1 from "../images/carousel/1.jpg";
import Banner2 from "../images/carousel/2.jpg";
import Banner3 from "../images/carousel/3.jpg";

import { Carousel } from "react-bootstrap";
import "./Banner.css";
const Banner = () => {
  const images = [
    {
      id: 1,
      image: Banner1,
      btnLabel: "Find out more",
      description: "Smarter Internet Banking",
      interval: 10000,
    },
    {
      id: 2,
      image: Banner2,
      btnLabel: "Find out more",
      description: "To Add value for your money",
      interval: 5000,
    },
    {
      id: 3,
      image: Banner3,
      btnLabel: "Find out more",
      description: "More Secure Services",
      interval: 15000,
    },
  ];
  return (
    <Carousel id="top" nextLabel="" prevLabel="">
      {images.map((data) => {
        const { id, image, btnLabel, description, interval } = data;
        return (
          <Carousel.Item interval={interval} key={id}>
            <img className="d-block w-100 " src={image} alt="First slide" />

            <Carousel.Caption>
              <div className="w-50 ms-5 carousel-text-box text-center">
                <div>
                  <button className="btn btn-danger text-end">
                    {btnLabel}
                  </button>
                </div>

                <p className=" text-dark mt-3 carousel-desc-text ">
                  {description}
                </p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default Banner;
