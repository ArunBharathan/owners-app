import React from "react";
import { BackButton } from "../../components/BackButton/Loadable";
import { RoomList } from "../../components/RoomList/Loadable";

export const HostelDetailPage = () => {
  return (
    <div className="container">
      <BackButton
        transperant={false}
        title="ST JAMES LADIES PG"
        label="Vytila, Ernakulam"
      />
      <div className="menu-tab">
        <div className="tab-item">Room details</div>
        <div className="tab-item">Tenants</div>
        <div className="tab-item">About</div>
      </div>
      <RoomList />
    </div>
  );
};
