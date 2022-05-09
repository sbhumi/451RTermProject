import React from "react";
import { useMsal } from "@azure/msal-react";
import { useNavigate } from "react-router-dom";
import "../styleSheets/SiteHeader.css";
import { useIsAuthenticated,  AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";
import { useSelector, useDispatch } from 'react-redux';



function handleLogout(instance, navigate) {
    instance.logoutRedirect().catch(e => {
        console.error(e);
    }).then(navigate("/"));
}

function SignOutButton() {
    const { instance, accounts } = useMsal();
    const name = accounts[0] && accounts[0].name;
    const navigate = useNavigate();

    const microsoftData = useSelector((state) => state.microsoftData.value);

    

    return (
        <div>
            <AuthenticatedTemplate>
            <h6 className="signOutHeader" >Hello {name}</h6>
            <center>
                <button className="signOutBtn btn btn-warning float-right" onClick={() => handleLogout(instance, navigate)}>Sign Out</button> 
            </center>
            </AuthenticatedTemplate>
        </div>
    );
}

export default SignOutButton;