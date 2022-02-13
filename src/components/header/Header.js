import './Header.css'; 

function Header(){
    return (
        <header className="main-header shadow">
             <div className="top-header">
                    <div className='container top-header-wrapper'>
                        <div className="logo header-logo">
                            <h5>Tours</h5>
                        </div>
                        <nav className="header-nav">
                            
                                <ul className="nav-list">
                                    <li className="nav-item nav-item-sign active"><a href="#" className="nav-link">Sign Up</a></li>
                                    <li className="nav-item nav-item-start"><a href="#" className="nav-link get-start-link">Get Started</a></li>
                                </ul>
                        </nav>
                    </div>
                </div>
                
                
                    <div className='banner'>
                    <div className='overlay'></div>
                    <div className='banner-content'>
                        <h3 className='banner-title'>Your Experiences.<br></br>A world of guests.</h3>
                        <p className='banner-parg'>Join us to sell your tours, activities and attraction tickets and promote your business to millions of travelers worldwide.</p>
                        <a className='get-start-link' href="#">Get started</a>
                    </div>        
              
            </div>
        </header>  
    );
}

export default Header; 