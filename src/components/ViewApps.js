import { Table } from 'react-bootstrap';
import SiteHeader from './SiteHeader';
import AdminNavMenu from './AdminNavMenu';
import "../styleSheets/ViewApps.css";


function ViewApps() {

    return (
        <div className="ViewApplicationsPage">
        <AdminNavMenu/>
        <SiteHeader/>
        
        <center>
        <h2 className='page-heading'>View Applications</h2>

        <div className='search'>
            <input type="search" className="search-bar form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
            <button type="search" className="search-button btn btn-outline-primary">search</button>
        </div>

            <div className="tableDiv">
                <Table striped bordered hover size="sm">
                <thead align="center">
                    <tr className = "tableHeader">
                        <th>APPLICATION:</th>
                        <th># APPLICANTS:</th>
                        <th>ACTIONS:</th>
                    </tr>
                </thead>
                <tbody align="center">
                    <tr>
                        <td>CS 101</td>
                        <td>70</td>
                        <td> <button className="btn btn-secondary">View Applicants</button> </td>
                    </tr>
                    <tr>
                        <td>CS 101L</td>
                        <td>34</td>
                        <td> <button className="btn btn-secondary">View Applicants</button> </td>
                    </tr>
                    <tr>
                        <td>CS 201</td>
                        <td>59</td>
                        <td> <button className="btn btn-secondary">View Applicants</button> </td>
                    </tr>
                </tbody>
                </Table>
            </div>
        </center>
        
        </div>
    );
}

export default ViewApps;