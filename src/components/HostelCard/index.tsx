import React from "react";
import { useNavigate } from "react-router-dom";
import { routes } from "../../utils/urlRoutes";
import "./style.scss";

interface Props {
  hostel: {
    name: string;
    address: string;
    images?: Array<any>;
    rooms: number;
    occupied: number;
  };
}
export const HostelCard = ({ hostel }: Props) => {
  const navigate = useNavigate();
  return (
    <div className="hostel-card">
      <div className="image-grid">
        <img
          className="cover-image"
          src="https://img.imageboss.me/fmh-assets/width/700/wmk-width:100,wmk-pad:5,wmk-position:east,wmk-opacity:35,wmk-path:%2Ffmh_logo.png/ab47384097_83e56dbc5b.jpeg"
          alt=""
        />
        <div className="room-images">
          <img
            src="https://img.imageboss.me/fmh-assets/width/700/wmk-width:100,wmk-pad:5,wmk-position:east,wmk-opacity:35,wmk-path:%2Ffmh_logo.png/9093ff2377_79c8be8760.jpeg"
            alt=""
          />
          <img
            style={{ marginTop: "4px" }}
            src="https://img.imageboss.me/fmh-assets/width/700/wmk-width:100,wmk-pad:5,wmk-position:east,wmk-opacity:35,wmk-path:%2Ffmh_logo.png/5b12c13c26_076d117e5f.jpeg"
            alt=""
          />
        </div>
      </div>
      <div
        onClick={() => navigate(routes.toHostel(`${hostel.name}`))}
        className="hostel-details"
      >
        <div className="name-address">
          <h1>{hostel?.name}</h1>
          <p>{hostel?.address}</p>
        </div>
        <div className="desc">
          <p
            style={{
              color: "var(--text-green)",
            }}
          >
            {hostel.rooms} rooms available
          </p>
          <p
            style={{
              color: "var(--text-gray)",
            }}
          >
            13 people living here
          </p>
        </div>
      </div>
    </div>
  );
};
