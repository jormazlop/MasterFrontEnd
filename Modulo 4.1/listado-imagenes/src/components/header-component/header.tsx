import React from "react";
import './header.scss';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from "@fortawesome/free-solid-svg-icons";

export const Header: React.FC = () => {

   const navigate = useNavigate();

   const handleHome = () => {
      navigate("/");
   }

   const handleOrdenadores = () => {
      navigate("/ordenadores");
   }

   const handlePortatiles = () => {
      navigate("/portatiles");
   }

   const handlePerifericos = () => {
      navigate("/perifericos");
   }

   return <div className="header">
            <div className="header-home">
               <FontAwesomeIcon icon={faHome} onClick={handleHome}/>
            </div>
            <div className="header-sections">
               <ButtonGroup variant="contained">
                  <Button onClick={handleOrdenadores}>Ordenadores</Button>
                  <Button onClick={handlePortatiles}>Portatiles</Button>
                  <Button onClick={handlePerifericos}>Perifericos</Button>
               </ButtonGroup>
            </div>
          </div>;

}