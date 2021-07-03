import React from "react";
import Banner1 from "../images/carousel/1.jpg";
import Banner2 from "../images/carousel/2.jpg";
import Banner3 from "../images/carousel/3.jpg";

import { Carousel } from "react-bootstrap";
import "./Banner.css";
const images = [
  {
    image: Banner1,
    btnLabel: "Find out more",
    description: "Internet banking for banking transactions wherever you are",
    interval: 10000,
  },
  {
    image: Banner2,
    btnLabel: "Find out more",
    description: "To Add value for your money",
    interval: 5000,
  },
  {
    image: Banner3,
    btnLabel: "Find out more",
    description: "Summer is here vacation loan to see new places",
    interval: 15000,
  },
];

const Banner = () => {
  return (
    <Carousel nextLabel="" prevLabel="">
      {images.map((data) => {
        const { image, btnLabel, description, interval } = data;
        return (
          <Carousel.Item interval={interval}>
            <img className="d-block w-100 " src={image} alt="slide" />
            <Carousel.Caption>
              <div className="w-50 ms-5 text-center">
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
