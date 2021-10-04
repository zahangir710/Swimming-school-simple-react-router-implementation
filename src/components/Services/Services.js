import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

const Services = (props) => {
  const { bookingStatus, instractorName, img, service, subscription } =
    props.eachService;
  return (
    <div>
      <h1>This is Services</h1>
      <div className="home-container">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>{service}</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>bookingStatus: {bookingStatus}</ListGroupItem>
            <ListGroupItem>Instructor Name: {instractorName}</ListGroupItem>
            <ListGroupItem>
              Subscription: Daily: ${subscription.daily}
            </ListGroupItem>
          </ListGroup>
        </Card>
      </div>
    </div>
  );
};

export default Services;
