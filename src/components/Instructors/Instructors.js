import React from "react";
import useUsers from "../../useUsers";
import Instructor from "../Instructor/Instructor";

const Instructors = () => {
  const [users] = useUsers();
  console.log(users);
  return (
    <div className="container my-5 text-center">
      <h1>Meet Our Expart Instructors</h1>
      <div className="display">
        {users.map((user) => (
          <Instructor user={user} key={user.phone}></Instructor>
        ))}
      </div>
    </div>
  );
};

export default Instructors;
