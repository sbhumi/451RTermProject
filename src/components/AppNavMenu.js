import React, { Component } from 'react';
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import { Form, Row, Col } from 'react-bootstrap';
import {scaleDown as Menu} from 'react-burger-menu';
import '../styleSheets/NavMenu.css';

function AppNavMenu() {
    return (
        <div>
            <Menu>
                <a id = "applicant" className="menu-item" href = "/applicant-home">Home</a><br></br>
                <a id = "profile" className="menu-item" href = "/profile">Edit Profile</a><br></br>
                <a id = "application" className="menu-item" href = "/application-form">Edit Application</a><br></br>
                <a id = "status" className="menu-item" href = "/appstatus">Application Status</a><br></br>
                <a id = "postings" className="menu-item" href = "/jobpostings">Job Postings</a><br></br>
                <a id = "contact" className = "contact" href = "/contact">Contact Support</a>
            </Menu>
        </div>        
    )
}

export default AppNavMenu;
