import React, { useState } from "react";
import { Container, Nav, Navbar, Row, Col } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import "./Header.css";
import logo from "../images/logo.png";
import { Icon } from "semantic-ui-react";
import { useStateValue } from "../StateProvider";
import UserMenu from "../menus/UserMenu";
import AdminMenu from "../menus/AdminMenu";

const Header = () => {
  return (
    <div className="nav-container">
      <Container fluid className="nav-top-fluid">
        <Container className="nav-top pt-1 pb-0">
          <Row>
            <Col className="d-none d-md-block">
              <TopNav />
            </Col>
          </Row>
        </Container>
      </Container>

      <Container className="nav-middle py-3">
        <Row>
          <Col>
            <Link to="/">
              <img className="nav-logo" src={logo} alt="logo" />
            </Link>
          </Col>
          <Col className="d-flex align-items-center justify-content-end">
            <MiddleNav />
          </Col>
        </Row>
      </Container>

      <Container className="py-1">
        <Row>
          <Col>
            <NavBottom />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

const TopNav = () => {
  const history = useHistory();
  const handleNavClick = (eventKey) => {
    history.push(`/${eventKey}`);
  };

  return (
    <div>
      <Nav variant="tabs" defaultActiveKey="cards" onSelect={handleNavClick}>
        <Nav.Item>
          <Nav.Link eventKey="product">Products</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="price">Prices</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="login">Sign In</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="register">Register</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};

const MiddleNav = () => {
  const [{ userInfo }] = useStateValue();

  return (
    <div>
      {!userInfo && (
        <Nav className="d-flex justify-content-end">
          <Nav.Item className="me-3">
            <Nav.Link bsPrefix="middle-navbar" as={Link} to="/login">
              <Icon
                name="user"
                circular
                size="large"
                className="d-block mb-2"
              ></Icon>
              Sign In
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link bsPrefix="middle-navbar" as={Link} to="/register">
              <Icon
                name="unlock alternate"
                circular
                size="large"
                className="d-block mb-2 ms-2"
              ></Icon>
              Register
            </Nav.Link>
          </Nav.Item>
        </Nav>
      )}

      {userInfo && userInfo.user && !userInfo.user.isAdmin && <UserMenu />}
      {userInfo && userInfo.user && userInfo.user.isAdmin && <AdminMenu />}
    </div>
  );
};

const NavBottom = () => {
  const history = useHistory();
  const [activeKey, setActiveKey] = useState("home");

  const handleItemClick = (eventKey) => {
    eventKey === "home" ? history.push(`/`) : history.push(`/${eventKey}`);
    setActiveKey(eventKey);
  };

  return (
    <Navbar expand="md">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav
          className="mr-auto"
          activeKey={activeKey}
          onSelect={handleItemClick}
        >
          <Nav.Link className="nav-bottom-links" eventKey="home">
            Home
          </Nav.Link>
          <Nav.Link className="nav-bottom-links" eventKey="about">
            About
          </Nav.Link>

          <Nav.Link className="nav-bottom-links" eventKey="location">
            Location
          </Nav.Link>
          <Nav.Link className="nav-bottom-links" eventKey="contact">
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
