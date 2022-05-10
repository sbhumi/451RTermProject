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
    console.log("hello it's me");
    const { instance, accounts } = useMsal();
    const [graphData, setGraphData] = useState(null);
    const dispatch = useDispatch();

    const name = accounts[0] && accounts[0].name;

    function RequestProfileData() {
        const request = {
            ...loginRequest,
            account: accounts[0]
        };

        // Silently acquires an access token which is then attached to a request for Microsoft Graph data
        instance.acquireTokenSilent(request).then((response) => {
            callMsGraph(response.accessToken).then(response => {
                dispatch(assignData(response));
                
            });
        }).catch((e) => {
            instance.acquireTokenPopup(request).then((response) => {
                callMsGraph(response.accessToken).then(response => {
                    dispatch(assignData(response));
                    
                });
            });
        });
    }

    
    if (count == 0) {
        // this should solve the issue of making multiple API calls per second
        RequestProfileData();
        count = count + 1;
    }
};

export default ProfileContent;
