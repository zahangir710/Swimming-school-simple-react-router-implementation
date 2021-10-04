import Button from "@restart/ui/esm/Button";
import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = (props) => {
  return (
    <div className="container taxt-center my-4 padding">
      <h1 className="text-center ">404 Not Found</h1>
      <div className="text-center">
        <Link className="text-center" to="/home">
          {" "}
          <Button variant="secondary" className="rounded p-2 mt-4">
            Back to Home
          </Button>{" "}
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
