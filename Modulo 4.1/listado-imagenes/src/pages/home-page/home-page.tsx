import React from "react";
import './home-page.scss';
import { Header } from "../../components/header-component/header";
import { Home } from "../../components/home-component/home";

export const HomePage = () => {

   return <div className="home-page-container">
            <Header/>
            <Home />
          </div>;
}