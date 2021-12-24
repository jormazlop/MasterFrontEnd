import React from "react";
import './header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackward } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom';

interface HeaderProps {
   section?: string
}

export const Header: React.FC<HeaderProps> = (props: HeaderProps) => {

   const navigate = useNavigate()

   const returnButton = () => {
      navigate("/");
   }

   const Menu = () => {

      switch (props.section) {
         case 'detail':
            return <div className="return-button"> 
                     <FontAwesomeIcon icon={faBackward} size="2x" color="white" onClick={returnButton}/>
                   </div>;
         default:
            return null;
      }

   }


   return <div className="header">
            <Menu/>
          </div>;

}