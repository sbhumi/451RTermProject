import SiteHeader from "./SiteHeader";
import ProfileContent from "./ProfileContent";
import { useMsal, useIsAuthenticated,  AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";
import { loginRequest } from "../authConfig";
import { ProfileData } from "./ProfileData";
import { callMsGraph } from "../graph";
import { NavigationClient } from "@azure/msal-browser";
import { assignData } from './microsoftData';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";

var count = 0;

function Redirecting() {
    const navigate = useNavigate();
    
    ProfileContent();
    const microsoftData = useSelector((state) => state.microsoftData.value);

    var studentPositions = ["Freshman", "Sophomore", "Junior", "Senior", "Graduate"];
    
    function conductRedirection() {
        if (microsoftData.length !== 0) {
            if (studentPositions.includes(microsoftData[0].jobTitle)) {
                // FIX ME
                navigate("/applicant-home");
                console.log(microsoftData[0].jobTitle);
                // ADD FUNCTIONALITY TO CHECK IF USER ALREADY EXISTS IN DATABASE
                // IF NOT, REDIRECT USER TO COMPLETE PROFILE
                // IF SO, GO TO APPLICANT HOME 

            }
            else {
                navigate("/admin-home");
            }
        }
    }
    

    return (
        <div>
            <SiteHeader/>
            <br/>
            <center>
                <h4>Redirecting. . .</h4>
                {console.log(microsoftData)}
                {(microsoftData.length > 0) ?
                    
                    <div>Response Received{conductRedirection()}</div>
                    :
                    <div>
                        <br />
                        <p>Waiting for a response from Microsoft.</p>
                        <p>When you see your name in the top right, please refresh the page.</p>
                    </div>
                    
                }
            </center>

        </div>
    );
}

export default Redirecting;