import React from "react";
import './detail.scss';
import { useLocation } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface DetailState {
  user?: string;
}

interface DetailInfo {
  avatar_url?: string;
  company?: string;
  followers?: number;
  html_url?: string;
  id?: number;
  location?: string;
  name?: string;
  type?: string;
}

export const Detail: React.FC = () => {

  const {state}: {state: DetailState} = useLocation();

  const {user} = state;

  const [detailMember, setDetailMember] = React.useState<DetailInfo>({});

  const [isLoading, setIsLoading] = React.useState<boolean>(true);

  React.useEffect(() => {    
      
    const url = 'https://api.github.com/users/' + user;
    
    fetch(url)
       .then(async (data) => {
          if (data.ok) {
              data = await data.json();
              setDetailMember(data);
              setIsLoading(false);
          }
      });
  }, [user]);

  const detailInfo = () => {
    if(!isLoading) {
      return  <>
                <img className="detail-avatar" src={detailMember.avatar_url} alt="Profile" />
                {detailMember.name? <div>Nombre : {detailMember.name}</div> : null}
                {detailMember.id? <div>Id : {detailMember.id}</div> : null}
                {detailMember.company? <div>Compañia : {detailMember.company}</div> : null}
                {detailMember.location? <div>Lugar : {detailMember.location}</div> : null}
                {detailMember.followers? <div>Numero de seguidores : {detailMember.followers}</div> : null}
                {detailMember.type? <div>Tipo de usuario : {detailMember.type}</div> : null}
                {detailMember.html_url? 
                  <a href={detailMember.html_url}><FontAwesomeIcon icon={faGithub} size="2x" color="grey"/></a> : null}
              </>;
    } else {
      return <div className="spinner">
               <CircularProgress color="inherit" />
             </div>;
    }
  }

  return <div className="detail-container">
            {detailInfo()}
         </div>;
}