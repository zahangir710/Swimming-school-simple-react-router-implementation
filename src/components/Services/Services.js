import React from "react";
import { Container } from "react-bootstrap";
import useServices from "../../useServices";
import Service from "../Service/Service";
import "./Services.css";

const Services = () => {
  const [services] = useServices();
  return (
    <div className="container text-center">
      <h3 className="my-4">Choose the best services for you</h3>
      <Container className="display-services">
        {services.map((eachService) => (
          <Service eachService={eachService} key={eachService.key}></Service>
        ))}
      </Container>
    </div>
  );
};

export default Services;
