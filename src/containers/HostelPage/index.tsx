import React from "react";
import { HostelHeader } from "../../components/HostelHeader/Loadable";
import { RoomLists } from "../../components/RoomLists/Loadable";

interface Props {}

export const HostelPage = (props: Props) => {
  return (
    <div className="container">
      <HostelHeader roomView={false} />
      <RoomLists />
    </div>
  );
};
