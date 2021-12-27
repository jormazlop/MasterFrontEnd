import React from "react";
import './rick-morty-page.scss';
import { Header } from "../../components/header-component/header";
import { RickMortyCharacters } from "../../components/rick-morty-char-component/rick-morty-char";

export const RickMortyPage: React.FC = () => {

  return <div className="page-container">   
           <Header section="rickmorty"/>
           <RickMortyCharacters />
         </div>;
}