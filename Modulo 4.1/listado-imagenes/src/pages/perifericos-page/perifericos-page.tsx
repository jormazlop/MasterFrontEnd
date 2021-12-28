import React from "react";
import './perifericos-page.scss';
import { Header } from "../../components/header-component/header";
import { PerifericosComponent } from "../../components/perifericos-component/perifericos";

export const PerifericosPage = () => {

   return <div className="perifericos-page-container">
            <Header/>
            <PerifericosComponent/>
          </div>;
}
