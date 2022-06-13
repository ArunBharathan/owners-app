import React from "react";
import { AmenityAndRent } from "../../components/AmenityAndRent/Loadable";
import { HostelHeader } from "../../components/HostelHeader/Loadable";

export const RoomPage = () => {
  return (
    <div className="container">
      <HostelHeader roomView={true} />
      <AmenityAndRent
        amenities={["wi-fi", "geyser", "tv", "ac", "shower", "water-filter"]}
        rent={{ rentWithFood: 8000, rent: 5000 }}
        listView={false}
      />
    </div>
  );
};
