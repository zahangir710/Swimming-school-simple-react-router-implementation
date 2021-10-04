import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import "./Instructor.css";

const Instructor = (props) => {
  const { name, phone, email, picture, gender, location } = props.user;
  return (
    <div className="container">
      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={picture.large} />
          <Card.Body>
            <Card.Title>
              {name.first} {name.last}
            </Card.Title>
            <Card.Text>{gender}</Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>{email}</ListGroupItem>
            <ListGroupItem>Phone: {phone}</ListGroupItem>
            <ListGroupItem>City: {location.city}</ListGroupItem>
          </ListGroup>
        </Card>
      </div>
    </div>
  );
};

export default Instructor;
