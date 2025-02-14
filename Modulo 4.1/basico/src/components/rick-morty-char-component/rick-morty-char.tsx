import React from "react";
import './rick-morty-char.scss';
import { CircularProgress } from "@mui/material";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

interface Character {
   gender: string;
   id: number;
   image: string;
   name: string;
   species: string;
   status: string;
}

export const RickMortyCharacters: React.FC = () => {

   const [characters, setCharacters] = React.useState<Character[]>([]);

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
         .then(response => response.json())
         .then(async (data) => {
            setTotalPage(data.info.pages);
            setNext(data.info.next);
            setPrevious(data.info.prev);
            setCharacters(data.results);  
            setIsLoading(false);
        })
        .catch(error => {
            setTotalPage(0);
            setNext('');
            setPrevious('');
            setCharacters([]);  
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

      const handleChange = pageSelected => {
         setPage(pageSelected);
         const newUrl = 'https://rickandmortyapi.com/api/character?page=' + pageSelected;
         setUrl(newUrl);
      }

      const PageSelector = () => {
         const selectPages = [];
   
         for(let i = 1; i <= totalPage; i++) {
            selectPages.push(
               <option key={'option' + i.toString()} value={i}>{i}</option>
            );
         }
         return <>{selectPages}</>;
      }

      if(!isLoading) {

         for (let character of characters) {
            list.push(<div key={character.id} className="character-item">
                        <img src={character.image} alt="Character" />
                        <div className="character-info">
                           <div>Nombre: {character.name}</div>
                           <div>Género: {character.gender}</div>
                           <div>Especie: {character.species}</div>
                           <div>Estado: {character.status}</div>
                        </div>
                      </div>);
         }

         return <>
                  <div className="icons">
                     {previous? <FontAwesomeIcon icon={faArrowLeft} onClick={handlePrevious}/> : null}
                     Pagina<select id="pagina" value={page} onChange={e => handleChange(e.target.value)}>{PageSelector()}</select>de {totalPage}
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