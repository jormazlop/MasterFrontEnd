import React from "react";
import './portatiles-page.scss';
import { Header } from "../../components/header-component/header";
import { PortatilesComponent } from "../../components/portatiles-component/portatiles";

export const PortatilesPage = () => {

   return <div className="portatiles-page-container">
            <Header/>
            <PortatilesComponent/>
          </div>;
}
