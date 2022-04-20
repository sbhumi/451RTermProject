import React from "react";
import '../styleSheets/SiteHeader.css';
import logo from '../kangaroo-logo.png'; 
import SignOutButton from './SignOutButton';
import { useMsal, useIsAuthenticated,  AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";

function SiteHeader() {
    const isAuthenticated = useIsAuthenticated();

    return (
        <div className="headerContainer">
            <img src={logo}/>
            <div className="headerText">
                <h1 className='line1'>UMKC Graduate Teaching</h1>
                <h1 className='line2'> Application Portal</h1>
            </div>
            <div className="signOutBtnDiv">{ isAuthenticated ? <SignOutButton/> : <div></div> }</div>
        </div>
    );
}

export default SiteHeader;