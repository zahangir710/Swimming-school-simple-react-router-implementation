import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="container my-5 pb-5">
      <div className="d-flex justify-content-center">
        <div className="taxt-center banner">
          <img
            src="https://images.unsplash.com/photo-1505847610351-22b86a1afd66?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
            alt=""
          />
        </div>
        <div>
          <h5 className="mt-5">Our Story</h5>
          <p className="">
            Established in 1993, GLL is the largest UK-based charitable social
            enterprise delivering leisure, health and community services. Under
            the consumer facing brand Better, we operate 258 public Sports and
            Leisure facilities, 88 libraries, 10 children’s centres and 5
            adventure playgrounds in partnership with 50 local councils, public
            agencies and sporting organisations. Better leisure facilities enjoy
            46 million visitors a year and have more than 650,000 members.
          </p>
        </div>
      </div>
      <div className="d-flex justify-content-center ms-5 my-5">
        <div className="">
          <h5 className="mt-5">Who We Are</h5>
          <p className="">
            Having recently graduated high school, Zach is entering his freshman
            year of college at Ashland University and plans to pursue an early
            childhood education and intervention specialist major. He has a
            passion for working with students who have different needs or ways
            of learning and wants to make sure that every child feels supported
            along their learning journey—a trait that makes him an incredible
            Golden Teacher at Swimminh School.In the two years Addie has been
            with the Anderson team.
          </p>
        </div>
        <div className="taxt-center banner">
          <img
            src="https://images.unsplash.com/photo-1519209233471-a93512eebb72?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1653&q=80"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default About;
