import React from "react";
import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";
import "../styleSheets/ApplicantHome.css";
import { useMsal, useIsAuthenticated,  AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";
import { useNavigate } from "react-router-dom";


function AdminHome() {
    const navigate = useNavigate();
    
    const applicationsPath = "/view-apps";
    const jobsPath = "/edit-jobs";
    const supportPath = "/contact";
    
    
    return (
        <div className="home-page">
            <SiteHeader />

            <AuthenticatedTemplate>
                <br/>
                <h1>Welcome back to the Admin Portal!</h1>
                <br/>
                <p className="app-home-desc">Please select an option below.</p>

                <div className="HomeNavigation">
                    <div className="home-page-btns">
                        <div className="d-grid gap-4">
                            <button className="btn btn-primary" onClick={() => navigate(applicationsPath)}>View Applications</button>
                            <button className="btn btn-primary" onClick={() => navigate(jobsPath)}>Edit Job Listings</button>
                            <button className="btn btn-primary" onClick={() => navigate(supportPath)}>Contact Support</button>
                            
                        </div>
                    </div>
                </div>
            </AuthenticatedTemplate>

            <SiteFooter />
        </div>
    );
}

export default AdminHome;
