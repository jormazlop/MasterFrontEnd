import React from "react";
import './rick-morty-char.scss';
import { useNavigate } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

interface Character {
   created: string;
   episode: string[];
   gender: string;
   id: number;
   image: string;
   location: {
      name: string; 
      url: string
   }
   name: string;
   origin: {
      name: string;
      url: string
   }
   species: string;
   status: string;
   type: string;
   url: string;
}

export const RickMortyCharacters: React.FC = () => {

   const navigate = useNavigate();

   const [characters, setCharacters] = React.useState([]);

   const [page, setPage] = React.useState<number>(1);

   const [totalPage, setTotalPage] = React.useState<number>(0);

   const [isLoading, setIsLoading] = React.useState<boolean>(true);

   const [next, setNext] = React.useState<string>('');

   const [previous, setPrevious] = React.useState<string>('');

   const firstUrl = 'https://rickandmortyapi.com/api/character?page=1';

   const [url, setUrl] = React.useState<string>(firstUrl)

   React.useEffect(() => {    

      setIsLoading(true);
      
      fetch(url)
         .then(async (data) => {
            if (data.ok) {
                data = await data.json();
                console.log(data);
                setTotalPage(data.info.pages);
                setNext(data.info.next);
                setPrevious(data.info.prev);
                setCharacters(data.results);  
            } else {
                setCharacters([]);
            }
            setIsLoading(false);
        });
   }, [url]);

   const CharacterList = () => {

      const list = [];

      const handleNext = () => {
         setPage(page + 1);
         setUrl(next);
      }

      const handlePrevious = () => {
         setPage(page - 1);
         setUrl(previous);
      }

      if(!isLoading) {

         for (let character of characters) {
            list.push(<div key={character.id} className="character-item">
                        <div>{character.name}</div>
                      </div>)
         }

         return <>
                  <div className="icons">
                     {previous? <FontAwesomeIcon icon={faArrowLeft} onClick={handlePrevious}/> : null}
                     Pagina {page} de {totalPage}
                     {next?<FontAwesomeIcon icon={faArrowRight} onClick={handleNext}/> : null}
                  </div>
                  <div className="characters-container">
                     {list}
                  </div>
                </>;

      } else {
         return <div className="spinner">
                  <CircularProgress color="inherit" />
                </div>;
      }
   }

   return <div className="character-container">
            {CharacterList()}
          </div>;
}