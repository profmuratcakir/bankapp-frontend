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
    id: 1,
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
    id: 2,
    title: "Platinum Cards",
    image: Platinum01,
    cards: ["Cash+ Card", "Shop & Fly Card"],
    description:
      "For a limited time, earn a $150 bonus after making $500 in eligible purchases within the first 90 days of account opening.Enjoy a 0% intro APR9 on balance transfers for the first 12 billing cycles. After that the APR is variable, currently 13.99%–23.99%.",
  },
  {
    id: 3,
    title: "Silver Cards",
    image: Silver01,
    cards: ["Anatolia Travel Card", "Student Cash Back Credit Card"],
    description:
      "For a limited time, earn a $150 bonus after making $500 in eligible purchases within the first 90 days of account opening. Enjoy a 0% intro APR9 on balance transfers for the first 12 billing cycles. After that the APR is variable, currently 13.99%–23.99%.",
  },
];
const Product = () => {
  return (
    <Container id="top" className="product-container">
      <Row>
        <p className="h2 fw-bold text-center my-xs-1 my-md-1">Anatolia Cards</p>
      </Row>
      <Row className="d-flex justify-content-center ">
        {cardData.map((item) => {
          const { id, cards, image, title, description } = item;
          return (
            <Col
              key={id}
              xs={12}
              md={6}
              lg={4}
              className="d-flex justify-content-center  rounded p-3"
            >
              <Card
                className="card-stil"
                style={{ width: "22rem", marginBottom: "10px" }}
              >
                <Card.Title className="fw-bolder p-3">{title}</Card.Title>
                <Card.Img src={image} className="product-image" />
                <ListGroup className="list-group-flush">
                  {cards.map((card) => {
                    return (
                      <ListGroupItem
                        key={card}
                        className="py-1 card-properies-list"
                      >
                        <Card.Link href="#" className="product-card-link">
                          <div className="table-parent ">
                            <h5 className="table-child">{card}</h5>
                            <Icon
                              name="angle right"
                              className="icon-card d-flex align-items-center"
                            ></Icon>
                          </div>
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
