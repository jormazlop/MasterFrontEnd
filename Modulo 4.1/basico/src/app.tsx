import React from "react";
import './app.scss';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ListPage } from "./pages/list-page/list-page";
import { DetailPage } from "./pages/detail-page/detail-page";
import { OrganizationsPage } from "./pages/organizations-page/organizations-page";
import { RickMortyPage } from "./pages/rick-morty-page/rick-morty-page";

export const App = () => {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ListPage />} />
        <Route path="/detail" element={<DetailPage />} />
        <Route path="/organizations" element={<OrganizationsPage />} />
        <Route path="/rickmorty" element={<RickMortyPage />} />
      </Routes>
    </Router>
  );
};