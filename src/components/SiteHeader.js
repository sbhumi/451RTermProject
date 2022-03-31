import '../styleSheets/SiteHeader.css';

function SiteHeader() {
    // need to get img src to use the image in the repo not the url provided
    return (
        <div className="headerContainer">
            <img src="https://www.pinclipart.com/picdir/big/556-5568413_umkc-kangaroos-logo-umkc-kangaroos-clipart.png"/>
            <div className="headerText">
                <h1 className='line1'>UMKC Graduate Teaching</h1>
                <h1 className='line2'> Application Portal</h1>
            </div>
        </div>
    );
}

export default SiteHeader;