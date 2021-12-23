import React from "react";
import './search.scss';

export const Search: React.FC = (props) => {

   const [searchInput, setSearchInput] = React.useState<String>('lemoncode');

   const keyPress = (event) => {
       if(event.code === 'Enter') {
           props.handleSearch(searchInput);
           setSearchInput('');
       }  
   }

   const buttonClicked = () => {
       props.handleSearch(searchInput);
       setSearchInput('');
   }

   return <div className="search-container">
            <input className="search-input" type="text" 
                   onChange={e => setSearchInput(e.target.value)}
                   placeholder="Introducir busqueda aqui..."
                   maxLength='20'
                   onKeyPress={keyPress}
                   value={searchInput}/>
            <button className="search-button" 
                    onClick={buttonClicked}>Buscar</button>
          </div>;

}