import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Footer.css";
import logo from "../images/logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <Col sm={12} md={6} lg={4} className="footer-left">
        <Row>
          <p className="about">
            <span> BANK OF ANATOLIA</span> Ut congue augue non tellus bibendum,
            in varius tellus condimentum. In scelerisque nibh tortor, sed
            rhoncus odio condimentum in. Sed sed est ut sapien ultrices
            eleifend. Integer tellus est, vehicula eu lectus tincidunt,
            ultricies feugiat leo. Suspendisse tellus elit, pharetra in
            hendrerit ut, aliquam quis augue. Nam ut nibh mollis, tristique ante
            sed, viverra massa.
          </p>
        </Row>

        <Row className="icons">
          <Link to="/">
            <i className="fa fa-facebook"></i>
          </Link>
          <Link to="/">
            <i className="fa fa-twitter"></i>
          </Link>
          <Link to="/">
            <i className="fa fa-linkedin"></i>
          </Link>
          <Link to="/">
            <i className="fa fa-google-plus"></i>
          </Link>
          <Link to="/">
            <i className="fa fa-instagram"></i>
          </Link>
        </Row>
      </Col>
      <Col sm={12} md={6} lg={4} className="footer-center"></Col>

      <Col sm={12} md={6} lg={4} className="footer-right"></Col>
    </footer>
  );
};
export default Footer;
