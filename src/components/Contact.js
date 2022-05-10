import React from "react";
import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";
import AppNavMenu from "./AppNavMenu";
import "../styleSheets/Contact.css";
import { useMsal, useIsAuthenticated,  AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";
import { useNavigate } from "react-router-dom";


class Contact extends React.Component {
    render () {
        return (
            <div className="contact-page">
                <div>
                    <SiteHeader />
                        <br/>
                        <div className="contactInfo">
                            <div className = "boxes">
                                <text>
                                    <h1>We see you are facing some troubles...</h1>
                                    <br/>
                                    <div>This site was created by the Team at Error 404:</div>
                                    <div>Swetha Bhumireddy<br/>Christian Chapman<br/>Bryan Richlinski<br/>Ethan Stiles<br/></div>
                                    <br/>
                                    <h4>We have since graduated, please contact UMKC IT Support for your issues.</h4>
                                </text>
                            </div>
                        </div>
                    <SiteFooter />
                </div>
            </div>
        );
    }
}

export default Contact;
