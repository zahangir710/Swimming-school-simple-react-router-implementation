import React from "react";
import { Container, Form, FormControl, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <Navbar className="backgraound" expand="lg">
        <Container fluid>
          <Navbar.Brand>
            <NavLink className="logo-text" to="/home">
              Swimming School
            </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <NavLink activeClassName="selected" className="link" to="/home">
                Home
              </NavLink>
              <NavLink activeClassName="selected" className="link" to="/about">
                About
              </NavLink>
              <NavLink
                activeClassName="selected"
                className="link"
                to="/services"
              >
                Services
              </NavLink>
              <NavLink
                activeClassName="selected"
                className="link"
                to="/instructors"
              >
                Instroctores
              </NavLink>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
