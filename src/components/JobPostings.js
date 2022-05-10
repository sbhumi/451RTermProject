import { Table } from 'react-bootstrap';
import AppNavMenu from './AppNavMenu';
import SiteHeader from './SiteHeader';
import "../styleSheets/JobPostings.css";
import React from 'react';


const rows = [];

function generateRows() {
    // call database

}

class JobPostings extends React.Component {

    render() {

        return (
            <div className="JobPostingsPage">
            <AppNavMenu/>
            <SiteHeader/>

            <center>
            <h2 className='page-heading'>Job Postings</h2>

            <div className='search'>
                <input type="search" className="search-bar form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                <button type="search" className="search-button btn btn-outline-primary">search</button>
            </div>

                <div className="tableDiv">
                    <Table striped bordered hover size="sm">
                    <thead align="center">
                        <tr className = "tableHeader">
                            <th>JOB:</th>
                            <th>TYPE:</th>
                            <th>DESCRIPTION:</th>
                            <th>APPLY:</th>
                        </tr>
                    </thead>
                    <tbody align="center">
                        <tr>
                            <td>CS 101</td>
                            <td>Grader</td>
                            <td>We need a grader to grade CS 101 assignments, projects, exams, and quizzes.</td>
                            <td> <button className="btn btn-secondary">Apply to Position</button> </td>
                        </tr>
                        <tr>
                            <td>CS 101L</td>
                            <td>Instructor (Lab)</td>
                            <td>Instructing and facilitating lab environment for CS 101L.</td>
                            <td> <button className="btn btn-secondary">Apply to Position</button> </td>
                        </tr>
                        <tr>
                            <td>CS 201</td>
                            <td>Grader</td>
                            <td>We need a grader to grade CS 201 assignments, projects, exams, and quizzes.</td>
                            <td> <button className="btn btn-secondary">Apply to Position</button> </td>
                        </tr>
                    </tbody>
                    </Table>
                </div>
            </center>
            
            </div>
        );
    }
}

export default JobPostings;