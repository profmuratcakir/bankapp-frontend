import React from "react";
import {
  Card,
  ListGroup,
  ListGroupItem,
  Container,
  Col,
  Row,
} from "react-bootstrap";

import { Icon } from "semantic-ui-react";
import "./Price.css";
import price1 from "../images/price/money.jpeg";
import price2 from "../images/price/graph.jpeg";
import price3 from "../images/price/finance.jpeg";

// Price verileri
const priceData = [
  {
    id: 1,
    title: "Basic",
    subtitle: "For everybody ",
    image: price1,
    monthlyPrice: "5.50% ",
    packages: [
      "10 user included",
      "2GB storage",
      "Help center acces",
      "Email support",
    ],
  },
  {
    id: 2,
    title: "Premium",
    subtitle: "Most Populer",
    image: price2,
    monthlyPrice: "7.50% ",
    packages: [
      "20 user included",
      "10GB storage",
      "Help center acces",
      "Priority email support",
    ],
  },
  {
    id: 3,
    title: "Advance",
    subtitle: "Most interprising",
    image: price3,
    monthlyPrice: "9.50% ",
    packages: [
      "50 user included",
      "30GB storage",
      "Help center acces",
      "Phone & email support",
    ],
  },
];
const Price = () => {
  return (
    <Container id="top" className="mt-1 mb-2">
      <Row>
        <p className="h2 fw-bold text-center ">Price</p>
        <p className="h3 text-center my-xs-3 my-md-5 text-black-50">
          The right banking package for you.Get the privilege of choose between
          our many banking Packages 'and enjory services that will reward you
          and fit your lifestyle.
        </p>
      </Row>
      <Row className="d-flex justify-content-center ">
        {priceData.map((item) => {
          const { id, title, subtitle, image, monthlyPrice, packages } = item;
          return (
            <Col
              key={id}
              xs={12}
              md={6}
              lg={4}
              className="d-flex justify-content-center  rounded p-3"
            >
              <Card
                className="card-stil "
                style={{ width: "22rem", marginBottom: "25px" }}
              >
                <Card.Title className="fw-bolder text-center">
                  <h1>{title}</h1>
                </Card.Title>
                <Card.Title className="p-3 text-center">{subtitle}</Card.Title>
                <Card.Img src={image} className="product-image" />
                <Card.Title className="p-3 bg-booknow">
                  <h2 className="fw-bold text-center  ">{monthlyPrice}/mo</h2>
                </Card.Title>
                <ListGroup className="list-group-flush">
                  {packages.map((Package) => {
                    return (
                      <ListGroupItem
                        key={Package}
                        className="py-1 card-properies-list d-flex justify-content-center"
                      >
                        <Card.Link href="#" className="product-card-link">
                          <div className="table-parent ">
                            <h5 className="table-child">{Package}</h5>
                          </div>
                        </Card.Link>
                      </ListGroupItem>
                    );
                  })}
                </ListGroup>
                <Card.Body className="bg-booknow">
                  <Card.Link className="product-details d-flex align-items-center justify-content-center text-light fw-bold ">
                    <div className="d-flex  justify-content-start align-items-center">
                      <Icon name="save" className="icon-card icon-save "></Icon>
                      <span className="px-1 fw-bold text-center text-dark">
                        <h3>BOOK NOW</h3>
                      </span>
                    </div>
                  </Card.Link>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};
export default Price;
