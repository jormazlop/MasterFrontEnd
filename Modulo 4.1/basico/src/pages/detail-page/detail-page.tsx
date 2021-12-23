import React from "react";
import './detail-page.scss';
import { Header } from "../../components/header-component/header";
import { useLocation } from "react-router-dom";

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

  React.useEffect(() => {    
      
    const url = 'https://api.github.com/users/' + user;
    
    fetch(url)
       .then(async (data) => {
          if (data.ok) {
              data = await data.json();
              console.log(data);
              setDetailMember(data);
          }
      });
  }, [user]);



  return <div className="page-container">   
           <Header/>
           <div>{detailMember.login}</div>
         </div>;
}