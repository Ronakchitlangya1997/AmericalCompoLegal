import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import axios from 'axios';

export function Aboutus() {
    const [firstName, setFirstName] = useState("")
    const [LastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [message, setMessage] = useState("")
    const [submitted, setSubmitted] = useState(false);
    const [formsubmitted, setFormSubmitted] = useState(true);

    const contactUsSubmit = (event) => {
        event.preventDefault();
        try {
            axios.get(`https://${process.env.REACT_APP_BACKEND_IP}/contact-us/?fname=${encodeURIComponent(firstName)}&lname=${encodeURIComponent(LastName)}&email=${encodeURIComponent(email)}&phone=${encodeURIComponent(phone)}&message=${encodeURIComponent(message)}`)
            setSubmitted(true);
            setFormSubmitted(false);
            setTimeout(() => {
                setFormSubmitted(true);
                setSubmitted(false);
            
            }, 4000);
            document.getElementById('fname').value = "";
            document.getElementById('lname').value = "";
            document.getElementById('email').value = "";
            document.getElementById('phone').value = "";
            document.getElementById('message').value = "";
            setFirstName("");
            setLastName("");
            setEmail("");
            setPhone("");
            setMessage("");
            setTimeout(() => {
                setSubmitted(false);
            }, 1000);
        }catch {

        }
    }

    return (
        <div className="Section6">
             <div className="Section6_1">
                 <img className="Section6_image" src="https://americancompo.s3.ap-south-1.amazonaws.com/Final_About_Us.png" alt=""></img>
                 <p className="Section6_heading">American Compo Legal</p>
             </div>
            


            <div className="Section4_details d-flex">
            
                <div className="Section6_3">
                <p className="Section6_heading2_1">Introducing American Compo Legal, 
                your trusted partner in personal injury cases. With our expertise and care, 
                we ensure a seamless compensation process.
                 Our contingency fee structure means we only get paid when we win, 
                 alleviating financial concerns. 
                 Connect with top-notch attorneys specializing in personal injury for a higher chance of success. 
                 With personalized counseling and meticulous analysis, we provide comprehensive guidance, 
                 whether settling or going to trial. Your privacy is paramount; we guarantee confidentiality. 
                Trust us to advocate for your rights and pursue the justice you deserve.</p>
                </div>

                <div className="Section4_2_details Section4_2_details_about">
                    <p className="Section4_2_heding1">Reach Out</p>
                    {submitted && <div>
                    <img className="formsubmit_success" src="https://americancompo.s3.ap-south-1.amazonaws.com/GreenTickFinal.gif"></img>
                    <p id="submit-success-id">Successfully Submitted!</p>
                    </div>
                    }
                    {formsubmitted && <form className="Auth-form" onSubmit={contactUsSubmit}>
                        <div className='Section4_2_inputbox d-flex'>
                            <input className="Section4_2_input" type="text" id="fname" name="fname" placeholder='First Name' onChange={(event) => setFirstName(event.target.value)}/>
                            <input className="Section4_2_input" type="text" id="lname" name="lname" placeholder='Last Name'onChange={(event) => setLastName(event.target.value)}/>
                            <input className="Section4_2_input" type="text" id="email" name="email" placeholder='Email' onChange={(event) => setEmail(event.target.value)}/>
                            <input className="Section4_2_input" type="text" id="phone" name="phone" placeholder='Phone' onChange={(event) => setPhone(event.target.value)}/>
                            <textarea className="Section4_2_input messbox" type="text" id="message" name="message" placeholder='Type Your Message Here' onChange={(event) => setMessage(event.target.value)}/>
                        </div>
                        <button className="Section4_2_form_button" type="submit">
                            Submit
                        </button>
                    </form>}
                </div>
            </div>
        </div>
    )}
