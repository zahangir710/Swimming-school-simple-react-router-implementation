import React from "react";
import useUsers from "../../useUsers";
import Instructor from "../Instructor/Instructor";
import "./Instructors.css";

const Instructors = () => {
  const [users] = useUsers();
  console.log(users);
  return (
    <div className="container my-4 text-center">
      <h3 className="mb-5">Meet Our Expart Instructors</h3>
      <div className="display">
        {users.map((user) => (
          <Instructor user={user} key={user.phone}></Instructor>
        ))}
      </div>
    </div>
  );
};

export default Instructors;
