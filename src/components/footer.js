import React from 'react';
import { Link } from "react-router-dom";
import "./footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope , faMobileScreenButton,faLocationDot } from '@fortawesome/free-solid-svg-icons'

const margin = {
    marginLeft:"6px"
}


export function Footer() {

    return (
        <div className="footer" id="footerId">
        <div className="footer_upper">
            <div className="footer_upper_top">
                <div className="follow-us">
                    <h4>American Compo Legal</h4>
                    <p>Legal Disclaimer: Please Be Advised That Certain States May Consider This An Attorney Advertisement For Legal Services Paid For By A Non-attorney Spokesperson. American Compo Legal Is An Advertising Group That Represents Lawyers Jointly Advertising Their Services. American Compo Legal Is Not A Law Firm Or Lawyer Referral Service.</p>
                    <div className="follow-us_links">
                        <a href="https://www.instagram.com" target="_blank"><i class="fa-brands fa-instagram"></i></a>
                        {/* <a href="#"><img src="./Images/Dribbble.png" alt="" /></a> */}
                        <a href="https://www.twitter.com/" target="_blank"><i class="fa-brands fa-twitter"></i></a>
                        <a href="https://www.youtube.com/" target="_blank"><i class="fa-brands fa-youtube"></i></a>
                    </div>
                </div>

                <div className="quick-links">
                    <h4>Quick Links</h4>
                    <div className="quick-links_container">
                        <div className="quick-links_container-1">
                            <a href="/">Home</a>
                            <a href="/about-us">About Us</a>
                            <a href="#">Feedback</a>
                        </div>
                    </div>
                </div>

                <div className="reach-us">
                    <h4>Reach Us</h4>
                    <p><FontAwesomeIcon icon={faEnvelope} /><span  style={margin}>hello@americancompolegal.com</span></p>
                    <p><FontAwesomeIcon icon={faMobileScreenButton} /><span style={margin}>915 444 6999</span></p>
                    <p><FontAwesomeIcon icon={faLocationDot} /><span style={margin}>108 St Georges Terrace, Perth WA 6000, USA</span></p>
                </div>
            </div>
        </div>
    </div>
)
}