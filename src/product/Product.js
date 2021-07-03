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

import Gold01 from "../images/card/Gold01.jpeg";
import Platinum01 from "../images/card/Platinum01.jpeg";
import Silver01 from "../images/card/Silver01.jpeg";

import "./Product.css";

const cardData = [
  {
    title: "Gold Cards",
    image: Gold01,
    cards: [
      "Business Card",
      "Anatolia Express Card",
      "Secured Card",
      "Infinite Card",
    ],
    description:
      "Enjoy a 0% Intro APR on purchases and balance transfers for the first 12 billing cycles. After that, a variable APR applies $95/year there after.",
  },
  {
    title: "Platinum Cards",
    image: Platinum01,
    cards: ["Cash+ Card", "Shop & Fly Card"],
    description:
      "For a limited time, earn a $150 bonus after making $500 in eligible purchases within the first 90 days of account opening.Enjoy a 0% intro APR9 on balance transfers for the first 12 billing cycles. After that the APR is variable, currently 13.99%–23.99%.",
  },
  {
    title: "Silver Cards",
    image: Silver01,
    cards: ["Anatolia Travel Card", "Student Cash Back Credit Card"],
    description:
      "For a limited time, earn a $150 bonus after making $500 in eligible purchases within the first 90 days of account opening. Enjoy a 0% intro APR9 on balance transfers for the first 12 billing cycles. After that the APR is variable, currently 13.99%–23.99%.",
  },
];

const Product = () => {
  return (
    <Container className="product-container">
      <Row>
        <p className="h2 text-center">Anatolia Cards</p>
      </Row>

      <Row className="d-flex justify-content-center ">
        {cardData.map((item) => {
          const { cards, image, title, description } = item;
          return (
            <Col
              xs={12}
              md={6}
              lg={4}
              className="d-flex justify-content-center"
            >
              <Card style={{ width: "22rem", marginBottom: "25px" }}>
                <Card.Title>{title}</Card.Title>
                <Card.Img src={image} className="product-image" />
                <ListGroup className="list-group-flush">
                  {cards.map((card) => {
                    return (
                      <ListGroupItem className="py-1">
                        <Card.Link href="#" className="product-card-link">
                          <p>
                            {card}
                            <Icon
                              name="angle right"
                              className="icon-card"
                            ></Icon>
                          </p>
                        </Card.Link>
                      </ListGroupItem>
                    );
                  })}
                </ListGroup>

                <Card.Body>
                  <Card.Text>{description}</Card.Text>
                  <Card.Link href="#" className="product-details">
                    Detail
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

export default Product;
