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
                    <h4>Follow Us</h4>
                    <p>We would like to stay connected with you and keep you updated on
                        all the latest testimonials of different diseases. That's why we invite
                        you to follow our social media handles.</p>
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
                            <a href="#">Home</a>
                            <a href="#">About</a>
                            <Link to="/members">Members</Link>
                            <a href="#"><span>Donate</span></a>
                        </div>
                        <div className="quick-links_container-2">
                            <a href="#">Newsletter</a>
                            <a href="#">Feedback</a>
                            <a href="#">Join Us</a>
                        </div>
                    </div>


                </div>

                <div className="reach-us">
                    <h4>Reach Us</h4>
                    <p><FontAwesomeIcon icon={faEnvelope} /><span  style={margin}>hello@HealthUmbrella.com</span></p>
                    <p><FontAwesomeIcon icon={faMobileScreenButton} /><span style={margin}>0522-2981000</span></p>
                    <p><FontAwesomeIcon icon={faLocationDot} /><span style={margin}>NGO Office</span></p>

                </div>
            </div>

            <div className="footer_upper_bottom">
                <p>Terms & Conditions | Privacy Policy</p>
            </div>

        </div>

        <div className="footer_lower">
            <p><span>Disclaimer:</span> This website does not provide medical advice.</p>
            <p>The information, including but not limited to text, graphics, images and other material content on the website are for informational purposes only, no material on the site is intended to be a substitute for professional medical advice, diagnosis or treatment.</p>
        </div>
    </div>
)
}