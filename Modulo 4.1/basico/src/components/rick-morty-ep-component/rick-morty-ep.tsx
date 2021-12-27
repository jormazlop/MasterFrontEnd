import React from "react";
import './rick-morty-ep.scss';
import { CircularProgress } from "@mui/material";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

interface Episode {
   air_date: string;
   episode: string;
   id: number;
   name: string;
}

export const RickMortyEpisodes: React.FC = () => {

   const [episodes, setEpisodes] = React.useState<Episode[]>([]);

   const [isLoading, setIsLoading] = React.useState<boolean>(true);

   const [page, setPage] = React.useState<number>(1);

   const [totalPage, setTotalPage] = React.useState<number>(0);

   const [next, setNext] = React.useState<string>('');

   const [previous, setPrevious] = React.useState<string>('');

   const firstUrl = 'https://rickandmortyapi.com/api/episode?page=1';

   const [url, setUrl] = React.useState<string>(firstUrl)

   React.useEffect(() => {    

      setIsLoading(true);
      
      fetch(url)
         .then(response => response.json())
         .then(async (data) => {
            setTotalPage(data.info.pages);
            setNext(data.info.next);
            setPrevious(data.info.prev);
            setEpisodes(data.results);  
            setIsLoading(false);
        })
        .catch(error => {
         setTotalPage(0);
         setNext('');
         setPrevious('');
         setEpisodes([]);  
         setIsLoading(false);
        });
   }, [url]);

   const EpisodeList = () => {

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
         const newUrl = 'https://rickandmortyapi.com/api/episode?page=' + pageSelected;
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

         for (let episode of episodes) {
            list.push(<div key={episode.id} className="episodes-item">
                        <div className="episodes-info">
                           <div>Episodio: {episode.episode}</div>
                           <hr />
                           <div>Nombre: {episode.name}</div>
                           <div>Emitido el : {episode.air_date}</div>
                        </div>
                      </div>);
         }

         return <>
                  <div className="icons">
                     {previous? <FontAwesomeIcon icon={faArrowLeft} onClick={handlePrevious}/> : null}
                     Pagina<select id="pagina" value={page} onChange={e => handleChange(e.target.value)}>{PageSelector()}</select>de {totalPage}
                     {next?<FontAwesomeIcon icon={faArrowRight} onClick={handleNext}/> : null}
                  </div>
                  <div className="episodes-container">
                     {list}
                  </div>
                </>;

      } else {
         return <div className="spinner">
                  <CircularProgress color="inherit" />
                </div>;
      }
   }

   return <div className="episodes-container">
            {EpisodeList()}
          </div>;
}