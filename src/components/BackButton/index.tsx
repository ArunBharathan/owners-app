import React from "react";
import "./style.scss";
import { ReactComponent as LeftArrow } from "../../assets/svg-icons/left-arrow.svg";

interface Props {
  title?: string;
  label?: string;
  showLabel?: boolean;
  transperant: boolean;
}
export const BackButton = ({ title, label, showLabel, transperant }: Props) => {
  return (
    <div className="back-button-container">
      <LeftArrow className="icon-black" />
      <div className="title-and-label">
        <h2>{title}</h2>
        <label>{label}</label>
      </div>
    </div>
  );
};
