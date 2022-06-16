import React from "react";
import "./style.scss";
import { ReactComponent as DoorIcon } from "../../assets/svg-icons/door.svg";

const roomList = [
  {
    _id: "629079dc49fee10016acfc39",
    name: "Room-22",
    beds: 1,
    occupied: 0,
  },
  {
    _id: "629079dc49fee10016acfc3d",
    name: "Room-2",
    beds: 1,
    occupied: 0,
  },
  {
    _id: "629079dc49fee10016acfc3f",
    name: "Room-3",

    beds: 2,
    occupied: 1,
  },
  {
    _id: "629079dc49fee10016acfc41",
    name: "Room-4",
    beds: 2,
    occupied: 1,
  },
  {
    _id: "629079dc49fee10016acfc45",
    name: "Room-5",
    beds: 5,
    occupied: 5,
  },
];

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
        {roomList.map((room) => (
          <div key={room._id} className="room-item">
            <label htmlFor="x">{room?.name}</label>
            <span>
              <DoorIcon
                className={
                  room?.occupied === 0
                    ? "available"
                    : room.beds === room?.occupied
                    ? "full"
                    : "partial"
                }
              />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
