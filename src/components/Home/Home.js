import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import useServices from "../../useServices";
import Services from "../Services/Services";
import "./Home.css";

const Home = () => {
  const [services] = useServices();
  return (
    <div className="container">
      {services.slice(0, 4).map((eachService) => (
        <Services eachService={eachService} key={eachService.key}></Services>
      ))}
    </div>
  );
};

export default Home;
