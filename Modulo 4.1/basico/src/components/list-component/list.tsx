import React from "react";
import './list.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import Tooltip from '@mui/material/Tooltip';
import { useNavigate } from "react-router-dom";
import { CircularProgress } from "@mui/material";

interface SearchProps {
   search: string;
}

export const List: React.FC<SearchProps> = (props: SearchProps) => {

   const navigate = useNavigate();

   const [members, setMembers] = React.useState([]);

   const [isLoading, setIsLoading] = React.useState<boolean>(true);

   React.useEffect(() => {    

      setIsLoading(true);
      
      const url = 'https://api.github.com/orgs/' + props.search + '/members';
      
      fetch(url)
         .then(async (data) => {
            if (data.ok) {
                data = await data.json();
                setMembers(data);  
            } else {
                setMembers([]);
            }
            setIsLoading(false);
        });
   }, [props.search]);

   const detailMember = (login: string) => {
      navigate("/detail" , { state: {user: login}});
   }

   const memberList = () => {

      const list = [];

      if(!isLoading) {

         for(let member of members) {
            list.push(
            <div key={member.id} className="member-container" onClick={e => detailMember(member.login)}>
               <Tooltip title="User detail" placement="top">
                  <div>
                     <FontAwesomeIcon icon={faUser} size="2x"/>
                  </div>
               </Tooltip>
               <h2 className="member-name">{member.login}</h2>
               <img className="member-avatar" src={member.avatar_url} alt={member.login} />
            </div>);
         }

         return <>{list}</>;

      } else {
         return <div className="spinner">
                  <CircularProgress color="inherit" />
                </div>;
      }
   }

   return <div className="list-container">
            {memberList()}
          </div>;
}