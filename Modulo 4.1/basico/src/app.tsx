import React from "react";
import './app.scss';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ListPage } from "./pages/list-page/list-page";


export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ListPage />} />
      </Routes>
    </Router>
  );
};