import React from "react";
import "./style.scss";
import bed1Icon from '../../assets/svg-icons/three-beds.svg';
import hostelIcon from '../../assets/svg-icons/hostel-icon.svg'

interface Props {
  roomView: boolean;
}
export const HostelHeader = ({ roomView }: Props) => {
  return (
    <div className="hostel-header">
      <div
        style={{
          backgroundImage: `url(https://img.imageboss.me/fmh-assets/cdn/wmk-width:150,wmk-pad:5,wmk-position:east,wmk-opacity:35,wmk-path:%2Ffmh_logo.png/ab47384097_83e56dbc5b.jpeg)`,
        }}
        className="background-image"
      >
        {!roomView && (
          <div className="status">
            <img
              className="icon"
              src={require("../../assets/icons/icons8-check-circle.png")}
              alt="icon"
            />
            <p>Published</p>
          </div>
        )}
      </div>
      {roomView ? (
        <div className="room-name">Room no: 100</div>
      ) : (
        <div className="hostel-details">
          <div className="name-address">
            <h1>ST JAMES LADIES PG</h1>
            <p>Vytila, Ernakulam</p>
          </div>
          <div className="desc">
            <p
              style={{
                color: "var(--text-green)",
              }}
            >
              20 rooms available
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
      )}
      <div className="room-details">
        <div className="block">
          <img
            className="icon-24 mr-3"
            src={
              roomView
                ? bed1Icon
                : hostelIcon
            }
            alt="icon"
          />
          <div className="d-flex flex-column">
            <label className="label" htmlFor="labe">
              {roomView ? "Room Type" : "Total Rooms"}
            </label>
            <p className="value">100</p>
          </div>
        </div>
        <div className="block">
          <img
            className="icon-24 mr-3"
            src={require("../../assets/icons/icons8-single-bed.png")}
            alt=""
          />
          <div className="d-flex flex-column">
            <label className="label" htmlFor="labe">
              {roomView ? "Bed" : "Total bed"}
            </label>
            <p className="value">10</p>
          </div>
        </div>
        <div className="block">
          <img
            className="icon-24 mr-3"
            src={require("../../assets/icons/icons8-empty-bed.png")}
            alt="icon"
          />
          <div className="d-flex flex-column">
            <label className="label" htmlFor="labe">
              {roomView ? "Occupied" : "Rooms occupied"}
            </label>
            <p className="value">10</p>
          </div>
        </div>
      </div>
    </div>
  );
};
