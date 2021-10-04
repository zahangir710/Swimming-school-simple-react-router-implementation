import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="container">
      <div className="taxt-center banner">
        <img
          src="https://images.unsplash.com/photo-1505847610351-22b86a1afd66?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
          alt=""
        />
      </div>
      <h1 className="text-center">Our Story</h1>
      <h5>Who We Are</h5>
      <p className="mb-5">
        Established in 1993, GLL is the largest UK-based charitable social
        enterprise delivering leisure, health and community services. Under the
        consumer facing brand Better, we operate 258 public Sports and Leisure
        facilities, 88 libraries, 10 children’s centres and 5 adventure
        playgrounds in partnership with 50 local councils, public agencies and
        sporting organisations. Better leisure facilities enjoy 46 million
        visitors a year and have more than 650,000 members.
      </p>
    </div>
  );
};

export default About;
