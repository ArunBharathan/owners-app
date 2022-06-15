import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { HostelDetailPage } from "./containers/HostelDetailPage/Loadable";
import { HostelListPage } from "./containers/HostelListPage/Loadable";
import { HostelPage } from "./containers/HostelPage/Loadable";
import { ProtectedRoute } from "./containers/ProtectedRoute/Loadable";
import { RoomPage } from "./containers/RoomPage/Loadable";
import { GlobalStyles } from "./styles/global-styles";
import { routes } from "./utils/urlRoutes";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to={routes.toHostels} />} />
          <Route path={routes.toDashbaord} element={<ProtectedRoute />}>
            <Route path={routes.toHostels} element={<HostelListPage />} />
            <Route path={routes.toHostel2()} element={<HostelDetailPage />} />
            <Route path={routes.toHostel()} element={<HostelPage />} />
            <Route path={routes.toRoom()} element={<RoomPage />} />
          </Route>
        </Routes>
        <GlobalStyles />
      </BrowserRouter>
    </>
  );
}

export default App;
