import React from "react";
import './detail-page.scss';
import { Header } from "../../components/header-component/header";
import { useLocation } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface MyState {
  user?: string
}

interface DetailInfo {
  avatar_url?: string;
  bio?: string;
  blog?: string;
  company?: string;
  created_at?: string;
  email?: string;
  events_url?: string;
  followers?: number;
  followers_url?: string;
  following?: number;
  following_url?: string;
  gists_url?: string;
  gravatar_id?: string;
  hireable?: null
  html_url?: string;
  id?: number;
  location?: string;
  login?: string;
  name?: string;
  node_id?: string;
  organizations_url?: string;
  public_gists?: number;
  public_repos?: number;
  received_events_url?: string;
  repos_url?: string;
  site_admin?: boolean;
  starred_url?: string;
  subscriptions_url?: string;
  twitter_username?: string;
  type?: string;
  updated_at?: string;
  url?: string;
}

export const DetailPage: React.FC = () => {

  const {state}: {state: MyState} = useLocation();

  const {user} = state;

  const [detailMember, setDetailMember] = React.useState<DetailInfo>({});

  const [isLoading, setIsLoading] = React.useState<boolean>(true);

  React.useEffect(() => {    
      
    const url = 'https://api.github.com/users/' + user;
    
    fetch(url)
       .then(async (data) => {
          if (data.ok) {
              data = await data.json();
              console.log(data);
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
      return <><CircularProgress color="inherit" /></>;
    }
  }

  return <div className="page-container">   
            <Header/>
            <div className="detail-container">
              {detailInfo()}
            </div>
         </div>;
}