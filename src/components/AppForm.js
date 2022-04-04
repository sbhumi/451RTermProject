import React, { Component } from 'react';
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import { Alert, CForm, CFormLabel, CFormInput } from '@coreui/react';
import { Form, Row, Col } from 'react-bootstrap';
import '../styleSheets/AppForm.css';

class AppForm extends React.Component {
	render() { 
		return (
			<div className = "appform">
				<SiteHeader />

				<h2 className = "uniInfo">University Information</h2>
				<br></br>

				<center><Form>
					<Row><fieldset>
						<Form.Group as={Row} className="lvlRadio">
						<Col></Col>
						<Form.Label as="lvls" column sm={2}>Current Level:</Form.Label>
						<Col sm={3} align = "left">
							<Form.Check
							inline
							type="radio"
							label="B.S./B.A."
							name="lvlrd"
							id="bsba"
							/>
							<Form.Check
							inline
							type="radio"
							label="M.S."
							name="lvlrd"
							id="ms"
							/>
							<Form.Check
							inline
							type="radio"
							label="Ph.D."
							name="lvlrd"
							id="phd"
							/>
						</Col><Col sm = {3}></Col><Col></Col>
						</Form.Group>
					</fieldset></Row>

					<Row><Form.Group as={Row} className="gradSem">
					<Col></Col>
					<Form.Label column sm={2}>Graduating Semester:</Form.Label>
						<Col sm={3}>
							<Form.Control size = "sm" type="date"/>
						</Col>
						<Col sm = {3} align = "left">
							<Form.Text muted>Choose first day of month if unsure.</Form.Text>
						</Col><Col></Col>
					</Form.Group></Row>

					<Row><Form.Group as = {Row} className = "cGpa">
					<Col></Col>
					<Form.Label column sm = {2}>Cumulative GPA:</Form.Label>
						<Col sm = {3}>
							<Form.Control size = "sm" type = "integer" placeholder = "0.00"/>
						</Col>
						<Col sm = {3} align = "left">
							<Form.Text muted>Leave blank if first semester in progress.</Form.Text>
						</Col><Col></Col>
					</Form.Group></Row>

					<Row><Form.Group as = {Row} className = "hrs">
					<Col></Col>
					<Form.Label column sm = {2}>Hours at UMKC:</Form.Label>
						<Col sm = {3}>
							<Form.Control size = "sm" type = "integer" placeholder = "000"/>
						</Col>
						<Col sm = {3} align = "left">
							<Form.Text muted>Leave blank if first semester in progress.</Form.Text>
						</Col><Col></Col>
					</Form.Group></Row>

					<Row><Form.Group as = {Row} className = "ugDeg">
					<Col></Col>
					<Form.Label column sm = {2}>Undergraduate Degree:</Form.Label>
						<Col sm = {3}>
							<Form.Control size = "sm" type = "text" placeholder = "BSCS"/>
						</Col>
						<Col sm = {3} align = "left">
							<Form.Text muted>Enter if applicable.</Form.Text>
						</Col><Col></Col>
					</Form.Group></Row>

					<Row><Form.Group as = {Row} className = "currMajor">
					<Col></Col>
					<Form.Label column sm = {2}>Current Major:</Form.Label>
						<Col sm = {3}>
							<Form.Control size = "sm" type = "text" placeholder = "Computer Science"/>
						</Col><Col sm = {3}></Col><Col></Col>
					</Form.Group></Row>

				</Form>

				<br></br>
				<h2 className = "appInfo">Application Information</h2>
				<br></br>

				<Form>
					<Row>
						<fieldset>
							<Form.Group as={Row} className="appFor">
							<Col></Col>
							<Form.Label as="app" column sm={2}>Applying For:</Form.Label>
							<Col sm={3} align = "left">
								<Form.Check
								inline
								type="radio"
								label="Grader"
								name="apprd"
								id="grader"
								/>
								<Form.Check
								inline
								type="radio"
								label="Instructor"
								name="apprd"
								id="instructor"
								/>
								<Form.Check
								inline
								type="radio"
								label="Both"
								name="apprd"
								id="both"
								/>
							</Col><Col sm = {3}></Col><Col></Col>
							</Form.Group>
						</fieldset>
					</Row>

					<Row>
						<fieldset>
						<Form.Group as={Row} className="gtaCert">
						<Col></Col>
						<Form.Label as="app" column sm={2}>GTA Certified:</Form.Label>
							<Col sm={3} align = "left">
								<Form.Check
								inline
								type="radio"
								label="Yes"
								name="certrd"
								id="yes"
								/>
								<Form.Check
								inline
								type="radio"
								label="No"
								name="certrd"
								id="no"
								/>
								<Form.Check
								inline
								type="radio"
								label="Waived"
								name="certrd"
								id="waive"
								/>
								<Form.Check
								inline
								type="radio"
								label="N/A"
								name="certrd"
								id="na"
								/>
							</Col><Col sm = {3}></Col><Col></Col>
							</Form.Group>
						</fieldset>
					</Row>

					<Row><Form.Group as = {Row} className = "yesCert">
					<Col></Col><Col></Col>
					<Form.Label column sm = {2}>If Yes:</Form.Label>
						<Col sm = {3}>
							<Form.Control size = "sm" type = "text" placeholder = "Fall 2020"/>
						</Col>
						<Col sm = {3} align = "left">
							<Form.Text muted>Enter term you recevied GTA certification.</Form.Text>
						</Col><Col></Col><Col></Col>
					</Form.Group></Row>

					<Row><Form.Group as = {Row} className = "waiveCert">
					<Col></Col><Col></Col>
					<Form.Label column sm = {2}>If Waived:</Form.Label>
						<Col sm = {3}>
							<Form.Control size = "sm" type = "text" placeholder = "UMKC"/>
						</Col>
						<Col sm = {3} align = "left">
							<Form.Text muted>Enter name of US university you received degree.</Form.Text>
						</Col><Col></Col><Col></Col>
					</Form.Group></Row>

					<Row>
						<fieldset>
						<Form.Group as={Row} className="umkcCourse">
						<Col sm = {2}></Col>
						<Form.Label as="umCourses" column sm={2}>UMKC Courses Taken:</Form.Label>
							<Col sm={6} align = "left">
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
									<Col><Form.Check inline type="checkbox" label="CS 465R" name="umkcCourses" id="465R"/></Col>
									<Col><Form.Check inline type="checkbox" label="CS 470" name="umkcCourses" id="470"/></Col>
									<Col><Form.Check inline type="checkbox" label="CS 479" name="umkcCourses" id="479"/></Col>
									<Col><Form.Check inline type="checkbox" label="CS 490" name="umkcCourses" id="490"/></Col>
									<Col><Form.Check inline type="checkbox" label="CS 499" name="umkcCourses" id="499"/></Col>
								</Row>
							</Col><Col sm = {3}></Col><Col></Col>
							</Form.Group>
						</fieldset>
					</Row>

				</Form></center>

				<br></br><br></br><br></br>
                <div className="buttonSubmitInfo">
                    <button className="btnSubmitInfo">Submit Information</button>
                </div>
                <br></br><br></br><br></br>

			<SiteFooter />
		</div>
		);
	}
}
 
export default AppForm;
