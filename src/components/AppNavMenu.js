import React, { Component } from 'react';
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import ProfileContent from './ProfileContent';
import { Form, Row, Col } from 'react-bootstrap';
import {scaleDown as Menu} from 'react-burger-menu';
import { useNavigate } from "react-router-dom";
import '../styleSheets/NavMenu.css';

function AppNavMenu() {
    const navigate = useNavigate();

    return (
        <div>
            <Menu>
                <a id = "applicant" className="menu-item" href = "/applicant-home">Home</a><br></br>
                <a id = "profile" className="menu-item" href = "/profile">Edit Profile</a><br></br>
                <a id = "application" className="menu-item" href = "/application-form">Edit Application</a><br></br>
                <a id = "status" className="menu-item" href = "/application-status">Application Status</a><br></br>
                <a id = "postings" className="menu-item" href = "/job-postings">Job Postings</a><br></br>
                <a id = "contact" className = "contact" href = "/contact">Contact Support</a>
                <br></br><a id = "adminTemp" className = "menu-item" href = "/admin-home">Admin Temp</a>
            </Menu>
        </div>        
    )
}

export default AppNavMenu;
