import React from "react";
import './rick-morty-page.scss';
import { Header } from "../../components/header-component/header";
import { RickMortyCharacters } from "../../components/rick-morty-char-component/rick-morty-char";
import { RickMortyLocations } from "../../components/rick-morty-loc-component/rick-morty-loc";
import { RickMortyEpisodes } from "../../components/rick-morty-ep-component/rick-morty-ep";

export const RickMortyPage: React.FC = () => {

  const [api, setApi] = React.useState<string>('characters');

  return <div className="page-container">   
           <Header section="rickmorty"/>
           <div className="rickmorty-buttons">
             <button onClick={e => setApi('characters')}>Characters</button>
             <button onClick={e => setApi('locations')}>Locations</button>
             <button onClick={e => setApi('episodes')}>Episodes</button>
           </div>
           {api === 'characters'? <RickMortyCharacters /> : null}
           {api === 'locations'? <RickMortyLocations /> : null}
           {api === 'episodes'? <RickMortyEpisodes /> : null}
         </div>;
}