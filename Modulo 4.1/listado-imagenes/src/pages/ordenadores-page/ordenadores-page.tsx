import React from "react";
import './ordenadores-page.scss';
import { Header } from "../../components/header-component/header";
import { OrdenadoresComponent } from "../../components/ordenadores-component/ordenadores";

export const OrdenadoresPage = () => {

   return <div className="ordenadores-page-container">
            <Header/>
            <OrdenadoresComponent/>
          </div>;
}
