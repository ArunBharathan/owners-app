import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { HostelPage } from "./containers/HostelPage/Loadable";
import { GlobalStyles } from "./styles/global-styles";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HostelPage />} />
        </Routes>
        <GlobalStyles />
      </BrowserRouter>
    </>
  );
}

export default App;
