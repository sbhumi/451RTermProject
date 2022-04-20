import { Table } from 'react-bootstrap';
import AppNavMenu from './AppNavMenu';
import SiteHeader from './SiteHeader';
import "../styleSheets/JobPostings.css";

function JobPostings() {

    const rows = [];

    function generateRows() {
        // call database

    }

    return (
        <div className="JobPostingsPage">
        <AppNavMenu/>
        <SiteHeader/>

        
        
        <center>
        <h3 className='page-heading'>Job Postings</h3>

        <div className='search'>
            <input type="search" className="search-bar form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
            <button type="search" className="search-button btn btn-outline-primary">search</button>
        </div>

            <div className="tableDiv">
                <Table striped bordered hover size="sm">
                <thead align="center">
                    <tr>
                        <th>Job</th>
                        <th>Type</th>
                        <th>Description</th>
                        <th>Apply</th>
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

export default JobPostings;