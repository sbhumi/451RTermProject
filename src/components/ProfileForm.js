import React, { Component } from 'react';
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import AppNavMenu from "./AppNavMenu";
import AdminNavMenu from './AdminNavMenu';
import { Form, Row, Col } from 'react-bootstrap';
import { scaleDown as Menu} from 'react-burger-menu';
import '../styleSheets/ProfileForm.css';
import '../styleSheets/NavMenu.css';
import { useNavigate } from "react-router-dom";
import ReturnProfileData from './ReturnProfile';
import { useIsAuthenticated,  AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";
import { useSelector, useDispatch } from 'react-redux';
import microsoftData from './microsoftData';
import ProfileContent from './ProfileContent';

function ProfileFormPage(ProfileForm) {
    return function PageHOC() {
		const microsoftData = useSelector((state) => state.microsoftData.value);
		console.log(microsoftData);
        return <ProfileForm microsoftData={microsoftData} />;
    }
}


class ProfileForm extends React.Component {
    constructor(props) {
        super(props);
		this.state = {
			phoneNumberInput: "",
			studentIdInput: ""
		}
    }

	updatePhoneNumberInput(evt) {
		const val = evt.target.value;
		this.setState({
			phoneNumberInput: val
		});
	}

	updateStudentIdInput(evt) {
		const val = evt.target.value;
		this.setState({
			studentIdInput: val
		});
	}

	showSettings (event) {
		event.preventDefault();
	}

	render() {
		var firstName = this.props.microsoftData[0].givenName;
		var lastName = this.props.microsoftData[0].surname;
		var email = this.props.microsoftData[0].userPrincipalName;
		
		return (
			<div className = "profileform" >
				<AppNavMenu/>

				<main>
					<SiteHeader />
					<AuthenticatedTemplate>
					
					<h2 className = "profileInfo">Profile Information</h2>
					<br></br>

					<center><Form>
						<Row><Form.Group as={Row} className="fullName">
						<Col></Col><Col></Col>
						<Form.Label column sm = {2}>Full Name:</Form.Label>
							<Col sm = {3}>
								<Form.Control size = "sm" type = "text" placeholder ={firstName + " " + lastName} disabled/>
							</Col>
							<Col sm = {3} align = "left">
								<Form.Text muted>Enter your legal name.</Form.Text>
							</Col>
                            <Col></Col>
						</Form.Group></Row>

						<Row><Form.Group as = {Row} className = "umEmail">
						<Col></Col><Col></Col>
						<Form.Label column sm = {2}>UMKC Email:</Form.Label>
							<Col sm = {3}>
								<Form.Control size = "sm" type = "email" placeholder ={email} disabled/>
							</Col>
							<Col sm = {3} align = "left">
								<Form.Text muted>Enter your umsystem email.</Form.Text>
							</Col><Col></Col>
						</Form.Group></Row>

						<Row><Form.Group as = {Row} className = "phoneNum">
						<Col></Col><Col></Col>
						<Form.Label column sm = {2}>Phone Number:</Form.Label>
							<Col sm = {3}>
								<Form.Control size = "sm" type = "integer" placeholder = "1234567890" value={this.state.phoneNumberInput} onChange={evt => this.updatePhoneNumberInput(evt)}/>
							</Col>
							<Col sm = {3} align = "left">
								<Form.Text muted >Enter your phone number.</Form.Text>
							</Col><Col></Col>
						</Form.Group></Row>

                        <Row><Form.Group as = {Row} className = "stuId">
						<Col></Col><Col></Col>
						<Form.Label column sm = {2}>Student ID:</Form.Label>
							<Col sm = {3}>
								<Form.Control size = "sm" type = "integer" placeholder = "01234567" value={this.state.studentIdInput} onChange={evt => this.updateStudentIdInput(evt)}/>
							</Col>
							<Col sm = {3} align = "left">
								<Form.Text muted>Enter your student ID.</Form.Text>
							</Col><Col></Col>
						</Form.Group></Row>

					</Form>

					<br></br><br></br>
					</center>

					<br></br><br></br><br></br>
					<div className="buttonSubmitInfo">
						<button className="btnSubmitInfo" onClick={() => {}}>Submit Information</button>
					</div>
					<br></br><br></br><br></br>

				</AuthenticatedTemplate>
				<SiteFooter />
			</main>
		</div>
		);
	}
}
 
export default ProfileFormPage(ProfileForm);
