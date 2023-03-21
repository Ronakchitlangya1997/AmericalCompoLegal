import React from 'react';

export function Footer() {

    return (
        <div className="Section5 d-flex">
            <div className="Section5_1">
                <p className="Section5_1_heading1">American Compo Legal</p>
                <p className="Section5_1_heading2">Legal Disclaimer: Please Be Advised That Certain States May Consider 
                    This An Attorney Advertisement For Legal Services Paid For 
                    By A Non-attorney Spokesperson. American Compo Legal Is An 
                    Advertising Group That Represents Lawyers Jointly Advertising Their Services. 
                    American Compo Legal Is Not A Law Firm Or Lawyer Referral Service.</p>
                {/* <div className="social">
                    <i class="fa-brands fa-facebook-square"></i>
                    <i class="fa-brands fa-instagram-square"></i>
                    <i class="fa-brands fa-twitter-square"></i>
                    <i class="fa-brands fa-youtube-square"></i>
                    <i class="fa-brands fa-whatsapp-square"></i>
                </div> */}
            </div>
            <div className="Section5_2">
                <p className="Section5_2_heading1">Quick Links</p>
                <ul>
                    <li><a href="#Home">Home</a></li>
                    <li><a href="#About">About Us</a></li>
                    <li><a href="#Feedback">Feedback</a></li>
                    {/* <li><a href="#CampLejeune">Camp Lejeune</a></li> */}
                </ul>
            </div>
            <div className="Section5_3">
                <p className="Section5_3_heading1">Reach Us</p>
                <ul>
                    <li><p className="Section5_3_heading1_reachus">hello@americancompolegal.com</p></li>
                    <li><p className="Section5_3_heading1_reachus">915 444 6999</p></li>
                </ul>
            </div>
        </div>
    )}