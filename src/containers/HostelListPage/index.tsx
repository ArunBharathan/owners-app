import React from "react";
import { GreetingsHeader } from "../../components/GreetingsHeader/Loadable";

interface Props {}
export const HostelListPage = ({}: Props) => {
  return <div className="container p-3" >
      <GreetingsHeader name={'Baskaran'} />
  </div>;
};
