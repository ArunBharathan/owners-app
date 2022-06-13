import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { HostelPage } from "./containers/HostelPage/Loadable";
import { RoomPage } from "./containers/RoomPage/Loadable";
import { GlobalStyles } from "./styles/global-styles";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/hostel/12312" />} />
          <Route path="/hostel/:id" element={<HostelPage />} />
          <Route path="/hostel/room" element={<RoomPage />} />
        </Routes>
        <GlobalStyles />
      </BrowserRouter>
    </>
  );
}

export default App;
