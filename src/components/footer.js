import React from 'react';
import { Link } from "react-router-dom";
import "./footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope , faMobileScreenButton,faLocationDot } from '@fortawesome/free-solid-svg-icons'
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";

const margin = {
    marginLeft:"6px"
}


export function Footer() {

    return (
        <div className="footer" id="footerId">
        <div className="footer_upper">
            <div className="footer_upper_top">
                <div className="follow-us">
                    <h4 className='Footer-heading'>American Compo Legal</h4>
                    <p className='Footer-subheading'>Legal Disclaimer: Please Be Advised That Certain States May Consider This An Attorney Advertisement For Legal Services Paid For By A Non-attorney Spokesperson. American Compo Legal Is An Advertising Group That Represents Lawyers Jointly Advertising Their Services. American Compo Legal Is Not A Law Firm Or Lawyer Referral Service.</p>
                    <div className="follow-us_links">
                        {/* <a href="https://www.instagram.com" target="_blank"><i class="fa-brands fa-instagram"></i></a>
                        {/* <a href="#"><img src="./Images/Dribbble.png" alt="" /></a> */}
                        {/* <a href="https://www.twitter.com/" target="_blank"><i class="fa-brands fa-twitter"></i></a>
                        <a href="https://www.youtube.com/" target="_blank"><i class="fa-brands fa-youtube"></i></a> */}
                        <a href="https://www.instagram.com/"
                            className="instagram social footer_icon">
                            <FontAwesomeIcon icon={faInstagram} size="1x" />
                        </a>
                        <a href="https://www.facebook.com/"
                            className="facebook social footer_icon">
                            <FontAwesomeIcon icon={faFacebook} size="1x" />
                        </a>
                        <a href="https://www.twitter.com/" className="twitter social footer_icon">
                            <FontAwesomeIcon icon={faTwitter} size="1x" />
                        </a>
                        <a href="https://www.youtube.com/"
                            className="youtube social footer_icon">
                            <FontAwesomeIcon icon={faYoutube} />
                        </a>
                    </div>
                </div>

                <div className="quick-links">
                    <h4 className='Footer-heading'>Quick Links</h4>
                    <div className="quick-links_container">
                        <div className="quick-links_container-1">
                            <a className='Footer-subheading' href="/">Home</a>
                            <a className='Footer-subheading' href="/about-us">About Us</a>
                            <a className='Footer-subheading' href="#">Feedback</a>
                        </div>
                    </div>
                </div>

                <div className="reach-us">
                    <h4 className='Footer-heading'>Reach Us</h4>
                    <p className='Footer-subheading'><FontAwesomeIcon icon={faEnvelope} /><span  style={margin}>hello@americancompolegal.com</span></p>
                    <p className='Footer-subheading'><FontAwesomeIcon icon={faMobileScreenButton} /><span style={margin}>915 444 6999</span></p>
                    <p className='Footer-subheading'><FontAwesomeIcon icon={faLocationDot} /><span style={margin}>108 St Georges Terrace, Perth WA 6000, USA</span></p>
                    {/* <div className='d-flex'>
                        <a href="#">Terms & Conditions</a>
                        <div className = "vertical"></div>
                        <a href="#">Privacy Policy</a>
                        <div className = "vertical"></div>
                        <a href="#">Sitemap</a>
                        <div className = "vertical"></div>
                        <a href="#">Disclaimer</a>
                    </div> */}
                </div>
            </div>
        </div>
    </div>
)
}