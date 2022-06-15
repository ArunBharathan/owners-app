import React from "react";
import "./style.scss";
import { ReactComponent as DoorIcon } from "../../assets/svg-icons/door.svg";

export const RoomList = () => {
  return (
    <div className="room-list-component">
      <div className="status-panel">
        <h5 className="mr-auto">Rooms</h5>
        <h5 className="before available">Available</h5>
        <h5 className="before partial">Partially available</h5>
        <h5 className="before full">Full</h5>
      </div>
      <div className="room-item-list">
        <div className="room-item">
          <label htmlFor="x">101</label>
          <span>
            <DoorIcon className="icon" />
          </span>
        </div>
        <div className="room-item">
          <label htmlFor="x">101</label>
          <span>
            <DoorIcon className="icon" />
          </span>
        </div>
        <div className="room-item">
          <label htmlFor="x">101</label>
          <span>
            <DoorIcon className="icon" />
          </span>
        </div>
        <div className="room-item">
          <label htmlFor="x">101</label>
          <span>
            <DoorIcon className="icon" />
          </span>
        </div>
        <div className="room-item">
          <label htmlFor="x">101</label>
          <span>
            <DoorIcon className="icon" />
          </span>
        </div>
        <div className="room-item">
          <label htmlFor="x">101</label>
          <span>
            <DoorIcon className="icon" />
          </span>
        </div>
        <div className="room-item">
          <label htmlFor="x">101</label>
          <span>
            <DoorIcon className="icon" />
          </span>
        </div>
      </div>
    </div>
  );
};
