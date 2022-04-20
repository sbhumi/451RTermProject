import React from "react";
import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";
import "../styleSheets/ApplicantHome.css";
import { useMsal, useIsAuthenticated,  AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";
import { useNavigate } from "react-router-dom";


function ApplicantHome() {
    const navigate = useNavigate();
    
    const profilePath = "/profile";
    const applicationFormPath = "/application-form";
    const applicationStatusPath = "";
    const jobPostingsPath = "/job-postings";
    const supportPath = "/contact";
    
    
    return (
        <div className="home-page">
            <SiteHeader />

            <AuthenticatedTemplate>
                <br/>
                <h1>Welcome back to the Application Portal!</h1>
                <br/>
                <p className="app-home-desc">Please select an option below.</p>

                <div className="HomeNavigation">
                    <div className="home-page-btns">
                        <div className="d-grid gap-4">
                            <button className="btn btn-primary" onClick={() => navigate(profilePath)}>Edit Profile</button>
                            <button className="btn btn-primary" onClick={() => navigate(applicationFormPath)}>Edit Application</button>
                            <button className="btn btn-primary">Application Status</button>
                            <button className="btn btn-primary" onClick={() => navigate(jobPostingsPath)}>Job Postings</button>
                            <button className="btn btn-primary" onClick={() => navigate(supportPath)}>Contact Support</button>
                            
                        </div>
                    </div>
                </div>
            </AuthenticatedTemplate>

            <SiteFooter />
        </div>
    );
}

export default ApplicantHome;