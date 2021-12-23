import React from "react";
import './list-page.scss';
import { Search } from "../../components/search-component/search";
import { List } from "../..//components/list-component/list";
import { Header } from "../../components/header-component/header";

export const ListPage: React.FC = () => {

  const [search, setSearch] = React.useState<String>('lemoncode');

  const handleSearch = (text) => {
    setSearch(text);
  }

  return <div className="page-container">   
           <Header/>
           <Search handleSearch={handleSearch}/> 
           <List search={search}/>
         </div>;
}