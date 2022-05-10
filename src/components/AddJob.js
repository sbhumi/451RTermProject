import React, { Component } from 'react';
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import AdminNavMenu from './AdminNavMenu';
import { Form, Row, Col } from 'react-bootstrap';
import { scaleDown as Menu} from 'react-burger-menu';
import '../styleSheets/AddJob.css';
import '../styleSheets/NavMenu.css';
import { useNavigate } from "react-router-dom";
import ReturnProfileData from './ReturnProfile';
import { useIsAuthenticated,  AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";
import { useSelector, useDispatch } from 'react-redux';


function JobPostingsPage(JobPostings) {
    return function PageHOC() {
		const microsoftData = useSelector((state) => state.microsoftData.value);
		console.log(microsoftData);
        return <JobPostings microsoftData={microsoftData} />;
    }
}

class AddJob extends React.Component {
	showSettings (event) {
		event.preventDefault();
	}

	constructor(props) {
        super(props);
		this.state = {
			typeInput: "",
			titleInput: "",
			jobIDInput: "",
			descrInput: "",
			reqCourseInput: ""
		}
    }

	updateTypeInput(evt) {
		const val = evt.target.id;
		this.setState({
			typeInput: val
		});
	}

	updateTitleInput(evt) {
		const val = evt.target.value;
		this.setState({
			titleInput: val
		});
	}

	updateJobIDInput(evt) {
		const val = evt.target.value;
		this.setState({
			jobIDInput: val
		});
	}

	updateDescriptionInput(evt) {
		const val = evt.target.value;
		this.setState({
			descrInput: val
		});
	}

	updateRequiredCourseInput(evt) {
		const val = evt.target.id;
		this.setState({
			reqCourseInput: val
		});
	}

	render() {

		return (
			<div className = "addjobform" >
				<AdminNavMenu/>

				<main>
					<SiteHeader />
					<AuthenticatedTemplate>
					
					<h2 className = "jobInfo">Job Position Information</h2>
					<br></br>

					<center><Form>
						<Row><fieldset>
							<Form.Group as={Row} className="jobType" value={this.state.typeInput} onChange={evt => this.updateTypeInput(evt)}>
							<Col></Col><Col></Col>
							<Form.Label as="types" column sm={2}>Job Type:</Form.Label>
							<Col sm={3} align = "left">
								<Form.Check
								inline
								type="radio"
								label="Grader"
								name="typejob"
								id="grader"
								/>
								<Form.Check
								inline
								type="radio"
								label="Instructor"
								name="typejob"
								id="instructor"
								/>
								<Form.Check
								inline
								type="radio"
								label="Both"
								name="typejob"
								id="both"
								/>
							</Col><Col sm = {3}></Col><Col></Col>
							</Form.Group>
						</fieldset></Row>
                        
						<Row><Form.Group as={Row} className="jobTitle">
						<Col></Col><Col></Col>
						<Form.Label column sm = {2}>Job Title:</Form.Label>
							<Col sm = {3}>
								<Form.Control size = "sm" type = "text" placeholder = "CS 000 Grader" value={this.state.titleInput} onChange={evt => this.updateTitleInput(evt)}/>
							</Col>
							<Col sm = {3} align = "left">
								<Form.Text muted>Enter job title.</Form.Text>
							</Col>
                            <Col></Col>
						</Form.Group></Row>

                        <Row><Form.Group as = {Row} className = "jobId">
						<Col></Col><Col></Col>
						<Form.Label column sm = {2}>Job ID:</Form.Label>
							<Col sm = {3}>
								<Form.Control size = "sm" type = "integer" placeholder = "0123" value={this.state.jobIDInput} onChange={evt => this.updateJobIDInput(evt)}/>
							</Col>
							<Col sm = {3} align = "left">
								<Form.Text muted>Enter the job ID.</Form.Text>
							</Col><Col></Col>
						</Form.Group></Row>
                        
                        <Row><Form.Group as = {Row} className = "jobDesc">
						<Col></Col><Col></Col>
						<Form.Label column sm = {2}>Job Description:</Form.Label>
							<Col sm = {3}>
								<Form.Control size = "sm" type = "integer" placeholder = "You are expected to grade classwork." value={this.state.descrInput} onChange={evt => this.updateDescriptionInput(evt)}/>
							</Col>
							<Col sm = {3} align = "left">
								<Form.Text muted>Enter a brief description of the position.</Form.Text>
							</Col><Col></Col>
						</Form.Group></Row>

                        <Row>
							<fieldset>
							<Form.Group as={Row} className="reqCourse" value={this.state.reqCourseInput} onChange={evt => this.updateRequiredCourseInput(evt)}>
							<Col sm = {2}></Col>
							<Form.Label as="umCourses" column sm={2}>Required Courses:</Form.Label>
								<Col sm={6} align = "left">
									<Row><br></br></Row>
									<Row>
										<Col><Form.Check inline type="checkbox" label="CS 100" name="umkcCourses" id="100"/></Col>
										<Col><Form.Check inline type="checkbox" label="CS 101" name="umkcCourses" id="101"/></Col>
										<Col><Form.Check inline type="checkbox" label="CS 101L" name="umkcCourses" id="101L"/></Col>
										<Col><Form.Check inline type="checkbox" label="CS 191" name="umkcCourses" id="191"/></Col>
										<Col><Form.Check inline type="checkbox" label="CS 201R" name="umkcCourses" id="201"/></Col>
									</Row>
									<Row>
										<Col><Form.Check inline type="checkbox" label="CS 281R" name="umkcCourses" id="281R"/></Col>
										<Col><Form.Check inline type="checkbox" label="CS 291" name="umkcCourses" id="291"/></Col>
										<Col><Form.Check inline type="checkbox" label="CS 303" name="umkcCourses" id="303"/></Col>
										<Col><Form.Check inline type="checkbox" label="CS 304WI" name="umkcCourses" id="304WI"/></Col>
										<Col><Form.Check inline type="checkbox" label="CS 320" name="umkcCourses" id="320"/></Col>
									</Row>
									<Row>
										<Col><Form.Check inline type="checkbox" label="CS 371" name="umkcCourses" id="371"/></Col>
										<Col><Form.Check inline type="checkbox" label="CS 394R" name="umkcCourses" id="394R"/></Col>
										<Col><Form.Check inline type="checkbox" label="CS 404" name="umkcCourses" id="404"/></Col>
										<Col><Form.Check inline type="checkbox" label="CS 420" name="umkcCourses" id="420"/></Col>
										<Col><Form.Check inline type="checkbox" label="CS 421A" name="umkcCourses" id="421A"/></Col>
									</Row>
									<Row>
										<Col><Form.Check inline type="checkbox" label="CS 423" name="umkcCourses" id="423"/></Col>
										<Col><Form.Check inline type="checkbox" label="CS 424" name="umkcCourses" id="424"/></Col>
										<Col><Form.Check inline type="checkbox" label="CS 431" name="umkcCourses" id="431"/></Col>
										<Col><Form.Check inline type="checkbox" label="CS 441" name="umkcCourses" id="441"/></Col>
										<Col><Form.Check inline type="checkbox" label="CS 449" name="umkcCourses" id="449"/></Col>
									</Row>
									<Row>
										<Col><Form.Check inline type="checkbox" label="CS 451R" name="umkcCourses" id="451R"/></Col>
										<Col><Form.Check inline type="checkbox" label="CS 456" name="umkcCourses" id="456"/></Col>
										<Col><Form.Check inline type="checkbox" label="CS 457" name="umkcCourses" id="457"/></Col>
										<Col><Form.Check inline type="checkbox" label="CS 458" name="umkcCourses" id="458"/></Col>
										<Col><Form.Check inline type="checkbox" label="CS 461" name="umkcCourses" id="461"/></Col>
									</Row>
									<Row>
										<Col><Form.Check inline type="checkbox" label="CS 5101" name="umkcCourses" id="5101"/></Col>
										<Col><Form.Check inline type="checkbox" label="CS 5102" name="umkcCourses" id="5102"/></Col>
										<Col><Form.Check inline type="checkbox" label="CS 5103" name="umkcCourses" id="5103"/></Col>
										<Col><Form.Check inline type="checkbox" label="CS 5514" name="umkcCourses" id="5514"/></Col>
										<Col><Form.Check inline type="checkbox" label="CS 5520" name="umkcCourses" id="5520"/></Col>
									</Row>
									<Row>
										<Col><Form.Check inline type="checkbox" label="CS 5525" name="umkcCourses" id="5525"/></Col>
										<Col><Form.Check inline type="checkbox" label="CS 5530" name="umkcCourses" id="5530"/></Col>
										<Col><Form.Check inline type="checkbox" label="CS 5531" name="umkcCourses" id="5531"/></Col>
										<Col><Form.Check inline type="checkbox" label="CS 5540" name="umkcCourses" id="5540"/></Col>
										<Col><Form.Check inline type="checkbox" label="CS 5542" name="umkcCourses" id="5542"/></Col>
									</Row>
									<Row>
										<Col><Form.Check inline type="checkbox" label="CS 5543" name="umkcCourses" id="5543"/></Col>
										<Col><Form.Check inline type="checkbox" label="CS 5546" name="umkcCourses" id="5546"/></Col>
										<Col><Form.Check inline type="checkbox" label="CS 5551" name="umkcCourses" id="5551"/></Col>
										<Col><Form.Check inline type="checkbox" label="CS 5552A" name="umkcCourses" id="5552A"/></Col>
										<Col><Form.Check inline type="checkbox" label="CS 5553" name="umkcCourses" id="5553"/></Col>
									</Row>
									<Row>
										<Col><Form.Check inline type="checkbox" label="CS 5555" name="umkcCourses" id="5555"/></Col>
										<Col><Form.Check inline type="checkbox" label="CS 5559" name="umkcCourses" id="5559"/></Col>
										<Col><Form.Check inline type="checkbox" label="CS 5560" name="umkcCourses" id="5560"/></Col>
										<Col><Form.Check inline type="checkbox" label="CS 5561" name="umkcCourses" id="5561"/></Col>
										<Col><Form.Check inline type="checkbox" label="CS 5565" name="umkcCourses" id="5565"/></Col>
									</Row>
									<Row>
										<Col><Form.Check inline type="checkbox" label="CS 5566" name="umkcCourses" id="5566"/></Col>
										<Col><Form.Check inline type="checkbox" label="CS 5567" name="umkcCourses" id="5567"/></Col>
										<Col><Form.Check inline type="checkbox" label="CS 5568" name="umkcCourses" id="5568"/></Col>
										<Col><Form.Check inline type="checkbox" label="CS 5570" name="umkcCourses" id="5570"/></Col>
										<Col><Form.Check inline type="checkbox" label="CS 5572" name="umkcCourses" id="5572"/></Col>
									</Row>
									<Row>
										<Col><Form.Check inline type="checkbox" label="CS 5573" name="umkcCourses" id="5573"/></Col>
										<Col><Form.Check inline type="checkbox" label="CS 5574" name="umkcCourses" id="5574"/></Col>
										<Col><Form.Check inline type="checkbox" label="CS 5576" name="umkcCourses" id="5576"/></Col>
										<Col><Form.Check inline type="checkbox" label="CS 5578" name="umkcCourses" id="5578"/></Col>
										<Col><Form.Check inline type="checkbox" label="CS 5581" name="umkcCourses" id="5581"/></Col>
									</Row>
									<Row>
										<Col><Form.Check inline type="checkbox" label="CS 5582" name="umkcCourses" id="5582"/></Col>
										<Col><Form.Check inline type="checkbox" label="CS 5588" name="umkcCourses" id="5588"/></Col>
										<Col><Form.Check inline type="checkbox" label="CS 5590" name="umkcCourses" id="5590"/></Col>
										<Col><Form.Check inline type="checkbox" label="CS 5592" name="umkcCourses" id="5592"/></Col>
										<Col><Form.Check inline type="checkbox" label="CS 5596A" name="umkcCourses" id="5596A"/></Col>
									</Row>
									<Row>
										<Col><Form.Check inline type="checkbox" label="CS 5596B" name="umkcCourses" id="5596B"/></Col>
										<Col><Form.Check inline type="checkbox" label="CS 5899" name="umkcCourses" id="5899"/></Col>
										<Col><Form.Check inline type="checkbox" label="CSEE 5110" name="umkcCourses" id="e5110"/></Col>
										<Col><Form.Check inline type="checkbox" label="CSEE 5111" name="umkcCourses" id="e5111"/></Col>
										<Col><Form.Check inline type="checkbox" label="CSEE 5113" name="umkcCourses" id="e5113"/></Col>
									</Row>
									<Row>
										<Col><Form.Check inline type="checkbox" label="CSEE 5590" name="umkcCourses" id="e5590"/></Col>
										<Col><Form.Check inline type="checkbox" label="CSEE 5690" name="umkcCourses" id="e5690"/></Col>
										<Col><Form.Check inline type="checkbox" label="CSEE 5697" name="umkcCourses" id="e5697"/></Col>
										<Col><Form.Check inline type="checkbox" label="CSEE 5699" name="umkcCourses" id="e5699"/></Col>
										<Col><Form.Check inline type="checkbox" label="CSEE 5899" name="umkcCourses" id="e5899"/></Col>
									</Row>
								</Col><Col sm = {3}></Col><Col></Col>
								</Form.Group>
							</fieldset>
						</Row>

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
 
export default AddJob;
