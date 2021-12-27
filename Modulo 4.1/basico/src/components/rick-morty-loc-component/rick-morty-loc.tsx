import React from "react";
import './rick-morty-loc.scss';
import { CircularProgress } from "@mui/material";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

interface Location {
   dimension: string;
   id: number;
   name: string;
   type: string;
   residents: string[];
}

export const RickMortyLocations: React.FC = () => {

   const [locations, setLocations] = React.useState<Location[]>([]);

   const [isLoading, setIsLoading] = React.useState<boolean>(true);

   const [page, setPage] = React.useState<number>(1);

   const [totalPage, setTotalPage] = React.useState<number>(0);

   const [next, setNext] = React.useState<string>('');

   const [previous, setPrevious] = React.useState<string>('');

   const firstUrl = 'https://rickandmortyapi.com/api/location?page=1';

   const [url, setUrl] = React.useState<string>(firstUrl)

   React.useEffect(() => {    

      setIsLoading(true);
      
      fetch(url)
         .then(response => response.json())
         .then(async (data) => {
            setTotalPage(data.info.pages);
            setNext(data.info.next);
            setPrevious(data.info.prev);
            setLocations(data.results);  
            setIsLoading(false);
        })
        .catch(error => {
         setTotalPage(0);
         setNext('');
         setPrevious('');
         setLocations([]);  
         setIsLoading(false);
        });
   }, [url]);

   const LocationList = () => {

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
         const newUrl = 'https://rickandmortyapi.com/api/location?page=' + pageSelected;
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

         for (let location of locations) {
            list.push(<div key={location.id} className="location-item">
                        <div className="location-info">
                           <div>Nombre: {location.name}</div>
                           <div>Dimensión: {location.dimension}</div>
                           <div>Tipo: {location.type}</div>
                           <div>Nº de residentes: {location.residents.length}</div>
                        </div>
                      </div>);
         }

         return <>
                  <div className="icons">
                     {previous? <FontAwesomeIcon icon={faArrowLeft} onClick={handlePrevious}/> : null}
                     Pagina<select id="pagina" value={page} onChange={e => handleChange(e.target.value)}>{PageSelector()}</select>de {totalPage}
                     {next?<FontAwesomeIcon icon={faArrowRight} onClick={handleNext}/> : null}
                  </div>
                  <div className="location-container">
                     {list}
                  </div>
                </>;

      } else {
         return <div className="spinner">
                  <CircularProgress color="inherit" />
                </div>;
      }
   }

   return <div className="locations-container">
            {LocationList()}
          </div>;
}