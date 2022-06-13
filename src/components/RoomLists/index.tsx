import React from "react";
import {useNavigate} from 'react-router-dom'
import "./style.scss";

interface Props {}

const rooms = [
  {
    _id: "629079dc49fee10016acfc39",
    name: "Room-22",
    roomType: "Private room",
    amenities: ["wi-fi", "Ac", "attached-bathroom"],
    beds: 1,
    occupied: 0,
  },
  {
    _id: "629079dc49fee10016acfc3d",
    name: "Room-2",
    roomType: "Private room",
    amenities: ["wi-fi", "Ac", "attached-bathroom"],
    beds: 1,
    occupied: 0,
  },
  {
    _id: "629079dc49fee10016acfc3f",
    name: "Room-3",
    roomType: "2 Sharing Room",
    amenities: ["wi-fi", "Ac", "attached-bathroom"],
    beds: 2,
    occupied: 0,
  },
  {
    _id: "629079dc49fee10016acfc41",
    name: "Room-4",
    roomType: "2 Sharing Room",
    amenities: ["wi-fi", "Ac"],
    beds: 2,
    occupied: 1,
  },
  {
    _id: "629079dc49fee10016acfc45",
    name: "Room-5",
    roomType: "5 Sharing Room",
    amenities: ["wi-fi", "Ac", "attached-bathroom"],
    beds: 5,
    occupied: 5,
  },
];
export const RoomLists = (props: Props) => {
  const navigate = useNavigate();
  return (
    <div className="room-list-container">
      <div className="d-flex">
        <h5>Room details</h5>
        <button>Edit</button>
      </div>
      {rooms.length > 0
        ? rooms.map((room) => (
            <div key={room?._id} onClick={() => navigate('/hostel/room')} className="room-card">
              <div
                style={{
                  background: `${
                    room.beds === room.occupied
                      ? "var(--primary-blue)"
                      : room.occupied === 0
                      ? "var(--secondary-blue)"
                      : "var(--ternary-blue"
                  }`,
                }}
                className="header"
              >
                <h2>Room no: {room?.name}</h2>
              </div>
              <div className="body">
                <div className="block">{room?.roomType}</div>
                <div className="block">
                  <strong>{room?.beds} beds</strong>
                </div>
                <div className="block">
                  <strong>{room?.occupied} occupied</strong>
                </div>
              </div>
              <div className="footer">
                <ul>
                  {room?.amenities.map((amenity, index) => (
                    <li key={index + amenity}>{amenity}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))
        : null}
    </div>
  );
};
