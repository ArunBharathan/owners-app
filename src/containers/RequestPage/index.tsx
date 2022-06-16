import React from "react";
import { GreetingsHeader } from "../../components/GreetingsHeader/Loadable";

const userList = [
  { name: "Lal", room: "100" },
  { name: "Vikram", room: "100" },
  { name: "Nadish", room: "103" },
  { name: "Sahal", room: "104" },
  { name: "Vinu", room: "104" },
];
export const RequestPage = () => {
  return (
    <>
    <div className="container">
      <GreetingsHeader name="John" />
      <div className="list-container p-3">
        {userList.map((user) => (
          <div className="list-item">
            <h5 className="title">{user?.name}</h5>
            <p className="value text-dark-gray mr-3">Approve</p>
            <p className="value text-orange">Reject</p>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};
