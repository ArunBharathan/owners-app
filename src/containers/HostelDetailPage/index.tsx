import React, { useState } from "react";
import { BackButton } from "../../components/BackButton/Loadable";
import { RoomList } from "../../components/RoomList/Loadable";
import { TenantList } from "../../components/TenantList/Loadable";

const amenityList = [
  "wi-fi",
  "geyser",
  "water-filter",
  "ac",
  "tv",
  "attached-bathroom",
];

export const HostelDetailPage = () => {
  const [tab, setTab] = useState<"room" | "tenant" | "about">("room");
  return (
    <div className="container">
      <BackButton
        transperant={false}
        title="ST JAMES LADIES PG"
        label="Vytila, Ernakulam"
      />
      <div className="menu-tab">
        <div
          onClick={() => setTab("room")}
          className={`tab-item ${tab === "room" ? "active" : ""}`}
        >
          Room details
        </div>
        <div
          onClick={() => setTab("tenant")}
          className={`tab-item ${tab === "tenant" ? "active" : ""}`}
        >
          Tenants
        </div>
        <div
          onClick={() => setTab("about")}
          className={`tab-item ${tab === "about" ? "active" : ""}`}
        >
          About
        </div>
      </div>
      {tab === "room" ? (
        <>
          <div className="filter-div">
            <p>
              Filter by <strong>Room</strong>
            </p>
          </div>
          <div className="filter-div flex-column">
            <p className="mb-3">
              Filter by <strong>Amenities</strong>
            </p>
            <div className="d-flex flex-wrap">
              {amenityList.map((amenity, index) => (
                <div
                  key={amenity}
                  className={`amenity ${index % 2 === 0 ? "active" : ""}`}
                >
                  {amenity}
                </div>
              ))}
            </div>
          </div>
          <RoomList />
        </>
      ) : tab === "tenant" ? (
        <>
        <TenantList count={100} />
        </>
      ) : tab === "about" ? (
        <></>
      ) : null}
    </div>
  );
};
