import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";
import "../styleSheets/ApplicantHome.css";
import { useMsal, useIsAuthenticated,  AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";


function ApplicantHome() {
    return (
        <div>
            <SiteHeader />

            <AuthenticatedTemplate>
                <h1>Welcome back to the Application Portal!</h1>
                <br/>
                <p className="app-home-desc">Please select an option below.</p>

                <div className="HomeNavigation">
                    <div className="home-page-btns">
                        <div className="d-grid gap-4">
                            <button className="btn btn-primary">Edit Profile</button>
                            <button className="btn btn-primary">Edit Application</button>
                            <button className="btn btn-primary">Application Status</button>
                            <button className="btn btn-primary">Job Postings</button>
                            <button className="btn btn-primary">Contact Support</button>
                            
                        </div>
                    </div>
                </div>
            </AuthenticatedTemplate>
            
            <SiteFooter />
        </div>
    );
}

export default ApplicantHome;


/*

<br/>
                    <div className="home-page-btn">
                        <button className="btn btn-primary">Edit Profile</button> <br/>
                    </div>

                    <div className="home-page-btn">
                        <button className="btn btn-primary">New Application</button> <br/>
                    </div>
                    
                    <div className="home-page-btn">
                        <button className="btn btn-primary">Application Status</button> <br/>
                    </div>
                    
                    <div className="home-page-btn">
                        <button className="btn btn-primary">Job Listings</button>
                    </div>

*/