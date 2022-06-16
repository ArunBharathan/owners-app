import React from "react";
import "./style.scss";
import { ReactComponent as CallIcon } from "../../assets/svg-icons/call-icon.svg";

interface Props {
  name: string;
}

export const GreetingsHeader = ({ name }: Props) => {
  return (
    <div className="greetings-container">
      <h1>Hi, {name}</h1>
      <button className="help-btn">
        {" "}
        <CallIcon className="icon" /> help
      </button>
    </div>
  );
};
