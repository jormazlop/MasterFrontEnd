import React from "react";
import './header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackward } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

interface HeaderProps {
   section?: string
}

export const Header: React.FC<HeaderProps> = (props: HeaderProps) => {

   const navigate = useNavigate();

   const [sectionTitle, setSectionTitle] = React.useState<string>('');

   React.useEffect(() => {    
      switch (props.section) {
         case 'detail':
            setSectionTitle("Detalle");
            break;
         case 'organizations':
            setSectionTitle("Organizaciones");      
            break;
         case 'rickmorty':
            setSectionTitle("Rick y Morty API"); 
            break; 
         default:
            setSectionTitle("Home");
            break;
      }  
   }, [props.section]);

   const divRef = React.useRef();

   const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
   const open = Boolean(anchorEl);
   const handleClick = (event: React.MouseEvent<HTMLElement>) => { setAnchorEl(divRef.current) };
   const handleClose = () => { setAnchorEl(null) };

   const returnButton = () => {
      const searchInput = localStorage.getItem('mySearch');
      navigate("/", { state: {lastSearch: searchInput}});
   }

   const handleHome = () => {
      navigate("/");
   }

   const handleOrganizations = () => {
      navigate("/organizations");
   }

   const handleRickMorty = () => {
      navigate("/rickmorty");
   }

   const MenuPrincipal = () => {

      return <>
               <div className="menu-button" 
                    onClick={handleClick}> 
                  <FontAwesomeIcon icon={faBars}/>
               </div>
               <Menu id="basic-menu"
                     anchorEl={anchorEl}
                     open={open}
                     onClose={handleClose}
                     MenuListProps={{'aria-labelledby': 'basic-button'}}>
                  {props.section? <MenuItem onClick={handleHome}>Home</MenuItem>: null}
                  {props.section !== "organizations"? <MenuItem onClick={handleOrganizations}>Organizaciones</MenuItem>: null}
                  {props.section !== "rickmorty"? <MenuItem onClick={handleRickMorty}>Rick y Morty</MenuItem>: null}
               </Menu>
             </>;
   }

   const MenuHeader = () => {
      switch (props.section) {
         case 'detail':
            return <>
                     <div className="return-button"> 
                        <FontAwesomeIcon icon={faBackward} onClick={returnButton}/>
                     </div>
                     <MenuPrincipal/>
                   </>;
         case 'organizations':
            return <>
                     <MenuPrincipal/>
                   </>;
         default:
            return <MenuPrincipal/>;
      }
   }

   return <div className="header" 
               ref={divRef}>
            <MenuHeader/>
            <h1 className="title">{sectionTitle}</h1>
          </div>;

}