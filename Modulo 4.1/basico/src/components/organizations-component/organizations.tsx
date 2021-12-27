import React from 'react';
import './organizations.scss';
import { CircularProgress } from "@mui/material";
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

interface Organization {
    avatar_url?: string;
    id?: number;
    login?: string;
    url?: string;
}

export const Organizations: React.FC = () => {

    const [organizations, setOrganizations] = React.useState<Organization[]>([]);

    const [isLoading, setIsLoading] = React.useState<boolean>(true);

    const [next, setNext] = React.useState<string>('');

    const [previous, setPrevious] = React.useState<string[]>([]);

    const [resultatParPage, setResultatParPage] = React.useState<number>(30);

    const firstUrl = 'https://api.github.com/organizations' + '?since=0&per_page=' + resultatParPage;

    const[url, setUrl] = React.useState<string>(firstUrl);

    const navigate = useNavigate();

    React.useEffect(() => {    

        setIsLoading(true);
        
        fetch(url)
           .then(async (data: Response) => {
              if (data.ok) {
                  const link = data.headers.get('link')
                                           .split(';')
                                           .join(',')
                                           .split('<')
                                           .join(',')
                                           .split('>')
                                           .join(',')
                                           .split(',');
                  setNext(link[1]);
                  data = await data.json();
                  setOrganizations(data);
              } 
              setIsLoading(false);
          });
    }, [url]);

    const OrganizationsList = () => {

        const list = [];

        const handleNext = () => {
            setPrevious([...previous, url]);
            setUrl(next);
        }

        const handlePrevious = () => {
            setUrl(previous[previous.length - 1]);
            previous.splice(previous.length - 1);
            setPrevious(previous);
        }

        const handleOrganization = (organization: string) => {
            navigate("/", { state: {lastSearch: organization}});
        }

        if(!isLoading) {
            for (let organization of organizations) {
                list.push(<div key={organization.id} className="organization-item">
                            <img className="logo" src={organization.avatar_url} alt="Avatar"/>
                            <div className="organization-title" 
                                 onClick={e => handleOrganization(organization.login)}>
                                {organization.login}
                            </div> 
                            <a href={organization.url}><FontAwesomeIcon icon={faGithub} size="2x" color="grey"/></a>
                          </div>)
            }
    
            return  <div>
                        <div className="icons">
                            {previous.length !== 0? <FontAwesomeIcon icon={faArrowLeft} onClick={handlePrevious}/> : null}
                            {next?<FontAwesomeIcon icon={faArrowRight} onClick={handleNext}/> : null}
                        </div>
                        <div className="organizations-container">
                            {list}
                        </div>
                    </div>;
        } else  {
            return <div className="spinner">
                     <CircularProgress color="inherit" />
                   </div>;
        }
    }
    return <OrganizationsList/>;
}