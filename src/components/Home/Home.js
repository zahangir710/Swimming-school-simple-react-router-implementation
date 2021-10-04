import Button from "@restart/ui/esm/Button";
import React from "react";
import { Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import useServices from "../../useServices";
import Service from "../Service/Service";
import "./Home.css";

const Home = () => {
  const [services] = useServices();
  const histoty = useHistory();
  const handleServices = () => {
    histoty.push("/services");
  };
  return (
    <div className="container text-center">
      <div className="text-center my-4 taxt-warning">
        <h3>Learn Swimming for Fun and Fitness</h3>
      </div>
      <Container className="display-services">
        {services.slice(0, 4).map((eachService) => (
          <Service eachService={eachService} key={eachService.key}></Service>
        ))}
      </Container>
      <Button
        onClick={handleServices}
        variant="outline-secondary"
        className="rounded margin"
      >
        Show All Services
      </Button>{" "}
    </div>
  );
};

export default Home;
