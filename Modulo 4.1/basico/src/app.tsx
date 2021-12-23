import React from "react";
import './app.scss';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ListPage } from "./pages/list-page/list-page";
import { DetailPage } from "./pages/detail-page/detail-page";

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ListPage />} />
        <Route path="/detail" element={<DetailPage />} />
      </Routes>
    </Router>
  );
};