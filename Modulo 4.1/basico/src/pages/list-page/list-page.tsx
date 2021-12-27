import React from "react";
import './list-page.scss';
import { Search } from "../../components/search-component/search";
import { List } from "../../components/list-component/list";
import { Header } from "../../components/header-component/header";
import { useLocation } from "react-router-dom";

interface ListState {
  lastSearch?: string | null
}

export const ListPage: React.FC = () => {

  const [search, setSearch] = React.useState<string>('lemoncode');

  const {state}: {state: ListState} = useLocation();

  const lastSearch: string = state? state.lastSearch: 'lemoncode';

  const handleSearch = (text: string) => {
    setSearch(text);
  }

  React.useEffect(() => {  
    setSearch(lastSearch);
  }, [lastSearch]);

  return <div className="page-container">   
           <Header/>
           <Search handleSearch={handleSearch} search={lastSearch}/> 
           <List search={search}/>
         </div>;
}