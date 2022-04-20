import React, { Component } from 'react';
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import AppNavMenu from "./AppNavMenu";
import AdminNavMenu from './AdminNavMenu';
import { Form, Row, Col, Table } from 'react-bootstrap';
import { scaleDown as Menu} from 'react-burger-menu';
import '../styleSheets/AppStatus.css';
import '../styleSheets/NavMenu.css';
import { useNavigate } from "react-router-dom";
import ReturnProfileData from './ReturnProfile';
import { useIsAuthenticated,  AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";


class AppStatus extends React.Component {

	showSettings (event) {
		event.preventDefault();
	}

	render() {
		return (
			<div className = "appStatus" >
				<AppNavMenu/>

				<main>
					<SiteHeader />
					<AuthenticatedTemplate>
					
					<h2 className = "appList">Application Status:</h2>
					<br></br>
                    <p className="app-home-desc"><b>You may navigate your current applications and their statuses below.</b></p>
                    <br/>

					<center>
                        <Table bordered responsive hover size="sm" className = "appStatusList">
                            <thead align="center">
                                <tr className = "tableHeader" colSpan={3}>
                                    <th>APPLICATION:</th>
                                    <th>STATUS:</th>
                                    <th>ACTIONS:</th>
                                </tr>
                            </thead>
                            <tbody align="center">
                                <tr colSpan={3}>
                                    <td>Grader for CS 101</td>
                                    <td>In Progress</td>
                                    <td><button className="btnSubmitInfo">Rescind</button></td>
                                </tr>
                                <tr colSpan={3}>
                                    <td>Instructor for CSEE 5590</td>
                                    <td>Under Review</td>
                                    <td><button className="btnSubmitInfo">Rescind</button></td>
                                </tr>
                                <tr colSpan={3}>
                                    <td>Lab Instructor for CS 201L</td>
                                    <td>Approved</td>
                                    <td><button className="btnSubmitInfo">Rescind</button></td>
                                </tr>
                                <tr colSpan={3}>
                                    <td>Lab Instructor for CS 201L</td>
                                    <td>Rejected</td>
                                    <td><button className="btnSubmitInfo">Rescind</button></td>
                                </tr>
                            </tbody>
                        </Table>

                        <br></br><br></br>
					</center>

					<br></br><br></br><br></br>
					<br></br><br></br><br></br>

				</AuthenticatedTemplate>
				<SiteFooter />
			</main>
		</div>
		);
	}
}
 
export default AppStatus;
