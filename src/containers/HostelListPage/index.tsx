import React from "react";
import { GreetingsHeader } from "../../components/GreetingsHeader/Loadable";
import { HostelCard } from "../../components/HostelCard/Loadable";

interface Props {}
export const HostelListPage = ({}: Props) => {
  return (
    <div className="container">
      <GreetingsHeader name={"Baskaran"} />
      <div className="first-button-container">
        <div className="d-flex flex-column">
          <h2>My Hostels</h2>
          <label htmlFor="label">02 listed</label>
        </div>
        <button className="white-btn">+ Add hostel</button>
      </div>
      <div className="list-container p-3">
        <HostelCard
          hostel={{
            name: "ST JAMES LADIES PG",
            address: "Vytila, Ernakulam",
            rooms: 20,
            occupied: 10,
          }}
        />
        <HostelCard
          hostel={{
            name: "janatha hostel",
            address: "Vytila, Ernakulam",
            rooms: 20,
            occupied: 10,
          }}
        />
      </div>
    </div>
  );
};
