import React from "react";
import './list.scss';

interface MemberEntity {
   id: string;
   login: string;
   avatar_url: string;
}

export const List: React.FC = (props) => {

   const [members, setMembers] = React.useState<MemberEntity[]>([]);

   React.useEffect(() => {    
      
      const url = 'https://api.github.com/orgs/' + props.search + '/members';
      
      fetch(url)
         .then(async (data) => {
            if (data.ok) {
                data = await data.json();
                setMembers(data);
            } else {
                setMembers([]);
            }
        });
   }, [props.search]);

   const memberList = () => {

      const list = [];

      for(let member of members) {
         list.push(
         <div key={member.id} className="member-container">
            <h1 className="member-id">{member.id}</h1>
            <h2 className="member-name">{member.login}</h2>
            <img className="member-avatar" src={member.avatar_url} alt={member.login} />
         </div>);
      }

      return <>{list}</>;
   }

   return <div className="list-container">
            {memberList()}
          </div>;
}