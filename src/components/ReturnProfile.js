import React, { useState } from 'react';
import { useMsal } from "@azure/msal-react";
import { callMsGraph } from "../graph";
import { loginRequest } from "../authConfig";

function ReturnProfileData() {
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
            callMsGraph(response.accessToken).then(response => setGraphData(response));
        }).catch((e) => {
            instance.acquireTokenPopup(request).then((response) => {
                callMsGraph(response.accessToken).then(response => setGraphData(response));
            });
        });

        console.log(graphData.givenName);
        return graphData
    }
    return RequestProfileData();
}

export default ReturnProfileData;