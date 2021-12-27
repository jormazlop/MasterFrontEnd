import React from 'react';
import './organizations-page.scss';
import { Header } from "../../components/header-component/header";
import { Organizations } from "../../components/organizations-component/organizations";

export const OrganizationsPage: React.FC = () => {

    return <div className="page-container">   
             <Header section="organizations"/>
             <Organizations/>
           </div>;

}