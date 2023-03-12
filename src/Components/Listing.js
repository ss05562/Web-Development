import React from "react";
import { users } from "./Users";

const UserProfile = ({ user }) => {
  const { username, firstName, lastName, school, email, profilePicture, classlevel } =
    user;
  return (
    <div className="user-profile">
      <div className="user-image">
        <img src={profilePicture} alt={`${firstName} ${lastName}`} />
      </div>
      <div className="user-info">
        <h3>{`${firstName} ${lastName}`}</h3>
        <p>{username}</p>
        <p>{school}</p>
        <p>{email}</p>
        <p style={{color: user.classlevel === "Freshmen" ? "green" : "black"}}>
          {classlevel}
        </p>
      </div>
    </div>
  );
};

const List = () => {
  return (
    <div className="list">
      {users.map((user) => (
        <UserProfile key={user.username} user={user} />
      ))}
    </div>
  );
};

export default List;
