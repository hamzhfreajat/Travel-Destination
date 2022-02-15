import './Footer.css';

function Footer(){
    return(
        <div className="footer">
               <div className="top-footer">
                    <h3>Ready to get started?</h3>
                    <p>Join us today and start selling your tours, activities and attractions tickets to millions of travelers worldwide.</p>
                    <a href='#'>Lets Go</a>
               </div>
               <div className="bottom-footer">
                    <div className="container">
                        <div id="footer-logo">
                            <div className="logo">
                                <h5>Tours</h5>
                            </div>
                        </div>
                        <div className="footer-copyright">
                            &copy; 2022 By Hamza Fraijat
                        </div>
                        <div className="footer-socail-media">
                            <ul>
                                <li><a href="https://web.facebook.com/">facebook</a></li>
                                <li><a href="https://www.instagram.com/">instagram</a></li>
                                <li><a href="https://twitter.com/">twitter</a></li>
                            </ul>
                        </div>
                    </div>
               </div>
        </div>
    )
}

export default Footer; 