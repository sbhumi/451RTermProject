import React, {useState} from 'react';
import { useMsal, useIsAuthenticated,  AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";
import { loginRequest } from "../authConfig";
import { ProfileData } from "./ProfileData";
import { callMsGraph } from "../graph";
import { NavigationClient } from "@azure/msal-browser";
import { useSelector, useDispatch } from 'react-redux';
import { assignData } from './microsoftData';


var count = 0;


function ProfileContent() {
    const { instance, accounts } = useMsal();
    const [graphData, setGraphData] = useState(null);

    const name = accounts[0] && accounts[0].name;

    function RequestProfileData() {
        const request = {
            ...loginRequest,
            account: accounts[0]
        };

        // Silently acquires an access token which is then attached to a request for Microsoft Graph data
        instance.acquireTokenSilent(request).then((response) => {
            callMsGraph(response.accessToken).then(response => {
                setGraphData(response);
                assignData(response);
                
            });
        }).catch((e) => {
            instance.acquireTokenPopup(request).then((response) => {
                callMsGraph(response.accessToken).then(response => {
                    setGraphData(response);
                    assignData(response);
                    
                });
            });
        });
    }

    
    if (count == 0) {
        // this should solve the issue of making multiple API calls per second
        RequestProfileData(); // can this be made synchronous?
        count = count + 1;
    }

    console.log(graphData);


    return graphData; // is there a better way to get graphData to other parts of the application?

    /*
    Example of successfully passing graph data to another component with no issues.
    How can we do this without calling/using the component here?
    return (
        <div>
            <h5 className="card-title">Welcome {name}</h5>

            {graphData ? 
                <ProfileData graphData={graphData} />
                :
                <div></div>
            }
        </div>
    );*/
};

export default ProfileContent;
