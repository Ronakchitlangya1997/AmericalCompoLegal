import React from 'react';

export function Contact() {

    return (
        <div className="Section4 d-flex">
            <div className="Section4_1">
                <p className="Section4_1_heading1">Request a Free Case Review</p>
                <p className="Section4_1_heading2">No Cost, No Obligation</p>
                <p className="Section4_1_heading3">or If You have a Referral</p>
                <p className="Section4_1_heading4">Our Core Values</p>
                <p className="Section4_1_heading5"> 
                    Transparency and integrity are part of our core values, 
                    and we strive to present unbiased, fact-checked data to the public. 
                    We understand that navigating legal matters is no easy task and 
                    so we are committed to helping you take legal action by finding the 
                    right law firm for your case. Our network of highly qualified law 
                    firms has a successful track record of handling cases similar to yours.
                </p>
            </div>
            <div className="Section4_2">
                <p className="Section4_2_heding1">Make Your Voice Heard</p>
                <form className="Auth-form">
                    <div className='Section4_2_inputbox d-flex'>
                        <input className="Section4_2_input" type="text" id="fname" name="fname" placeholder='First Name'/>
                        <input className="Section4_2_input" type="text" id="lname" name="lname" placeholder='Last Name'/>
                        <input className="Section4_2_input" type="text" id="email" name="email" placeholder='Email'/>
                        <input className="Section4_2_input" type="text" id="phone" name="phone" placeholder='Phone'/>
                        <textarea className="Section4_2_input messbox" type="text" id="message" name="message" placeholder='Type Your Message Here'/>
                    </div>
                    <button className="Section4_2_form_button" type="submit">
                        Submit
                    </button>
                </form>
            </div>
        </div>
        )}