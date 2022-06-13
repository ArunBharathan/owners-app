import React from "react";
import "./style.scss";
import foodUncheck from "../../assets/svg-icons/haram-food-1.svg";
import food from "../../assets/svg-icons/haram-food-2.svg";

interface Props {
  amenities: Array<string>;
  rent: any;
  listView: boolean;
}
export const AmenityAndRent = ({ amenities, rent, listView }: Props) => {
  return (
    <div className="d-flex flex-column p-3">
      <h2>Amenities</h2>
      <div className="amenities-container">
        {amenities.length > 0
          ? amenities.map((amenity, index) => (
              <div key={amenity + index} className="amenity">
                <img
                  className="icon-26"
                  src={require(`../../assets/svg-icons/${amenity.toLowerCase()}.svg`)}
                  alt="amenities"
                />
                <label>{amenity}</label>
              </div>
            ))
          : null}
      </div>
      <h2>Rent</h2>
      <div
        style={{
          flexDirection: listView ? "column" : "row",
          justifyContent: 'space-between'
        }}
        className={`rent-holder`}
      >
        <div
          style={{
            width: listView ? "100%" : "40%",
          }}
          className={`rent ${listView ? "border-2" : "border-1"}`}
        >
          <img src={foodUncheck} alt="" className="icon-20 mr-2" />
          Without food
          <span className="price">₹ {rent?.rent}</span>
        </div>
        <div
          style={{
            width: listView ? "100%" : "40%",
          }}
          className={`rent ${listView ? "border-2" : "border-1"}`}
        >
          <img src={food} alt="" className="icon-20 mr-2" />
          With food
          <span className="price">₹ {rent?.rentWithFood}</span>
        </div>
      </div>
    </div>
  );
};
