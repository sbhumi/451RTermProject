import React, { Component } from 'react';
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import { Form, Row, Col } from 'react-bootstrap';
import {scaleDown as Menu} from 'react-burger-menu';
import '../styleSheets/NavMenu.css';

function AdminNavMenu() {
    return (
        <div>
            <Menu>
                <a id = "admin" className="menu-item" href = "/admin-home">Home</a><br></br>
                <a id = "viewapps" className="menu-item" href = "/view-apps">View Applicants</a><br></br>
                <a id = "editjobs" className="menu-item" href = "/edit-jobs">Edit Job Listings</a><br></br>
                <a id = "contact" className = "contact" href = "/contact">Contact Support</a>
            </Menu>
        </div>        
    )
}

export default AdminNavMenu;
