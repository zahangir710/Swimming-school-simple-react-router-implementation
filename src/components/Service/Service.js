import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

const Service = (props) => {
  const {
    bookingStatus,
    instractorName,
    img,
    service,
    subscription,
    discription,
  } = props.eachService;
  return (
    <div>
      <div className="home-container">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>{service}</Card.Title>
            <Card.Text>{discription}</Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>booking Status: {bookingStatus}</ListGroupItem>
            <ListGroupItem>Instructor Name: {instractorName}</ListGroupItem>
            <ListGroupItem>
              Subscription: Monthly: ${subscription.monthly}
            </ListGroupItem>
          </ListGroup>
        </Card>
      </div>
    </div>
  );
};

export default Service;
