import React from "react";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import "../styleSheets/Home.css";

class Home extends React.Component {

    render() {
        return (
            <div className="homePage">
                <SiteHeader />

                <br></br>
                <h1 className="homePageText">Welcome to UMKC's Graduate Teaching Application Portal!</h1>
                <br></br>
                <h1 className="homePageText">To get started, login using the button below.</h1>
                <br></br><br></br><br></br><br></br><br></br>

                <br></br>
                <div className="buttonToLoginPageContainer">
                    <button className="btn btn-primary">Click Here to Login</button>
                </div>
                <br></br>

                <SiteFooter />
            </div>
        );
    }
}

export default Home;