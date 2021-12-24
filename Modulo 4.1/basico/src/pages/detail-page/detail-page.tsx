import React from "react";
import './detail-page.scss';
import { Header } from "../../components/header-component/header";
import { Detail } from "../../components/detail-component/detail";

export const DetailPage: React.FC = () => {

  return <div className="page-container">   
            <Header section="detail"/>
            <Detail/>
         </div>;
}