import '../styleSheets/SiteHeader.css';
import logo from '../kangaroo-logo.png'; 

function SiteHeader() {

    return (
        <div className="headerContainer">
            <img src={logo}/>
            <div className="headerText">
                <h1 className='line1'>UMKC Graduate Teaching</h1>
                <h1 className='line2'> Application Portal</h1>
            </div>
        </div>
    );
}

export default SiteHeader;