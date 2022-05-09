import React, { useState } from "react";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import "../styleSheets/Home.css";
import { useMsal, useIsAuthenticated,  AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";
import { loginRequest } from "../authConfig";
import { ProfileData } from "./ProfileData";
import { callMsGraph } from "../graph";
import { NavigationClient } from "@azure/msal-browser";
import { useNavigate } from "react-router-dom";
import {Navigate} from 'react-router-dom';
import ProfileContent from "./ProfileContent";



function HomePage(Home) {
    return function PageHOC() {
        const msalObj = useMsal();
        const navigate = useNavigate();
        return <Home msalObject={msalObj} navigate={navigate} />;
    }   
}


class Home extends React.Component {
    // Note, try to center the button vertically when time allows later on
    constructor(props) {
        super(props);
    }

    handleLogin(instance) {
        let path = "/redirecting";
        instance.instance.loginRedirect(loginRequest).catch(e => {
            console.error(e);
        }).then(this.props.navigate(path));
        

    }

    render() {   
        const msalObject = this.props.msalObject;
        return (
            <div className="homePage">
                <SiteHeader />

                <br/>
                <h1 className="homePageText">Welcome to UMKC's Graduate Teaching Application Portal!</h1>
                <br/>
                <h1 className="homePageText">To get started, login using the button below.</h1>
                <br/><br/><br/><br/><br/>

                <br/>
                <div className="buttonToLoginPageContainer">
                    <button className="btn btn-primary" onClick={() => this.handleLogin(msalObject)}>Click Here to Login</button>
                </div>
                <br/>
                
                <SiteFooter />
            </div>
        );
    }
}


export default HomePage(Home);