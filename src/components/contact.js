import React from 'react';
import axios from "axios";
import {useState} from "react";

export function Contact() {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    
    const submit = async e => {
        e.preventDefault();

        const user = {
            firstname: firstname,
            lastname: lastname,
            email:email,
            phone:phone,
            message:message
          };
        console.log(user)
        const {data} = await axios.post('http://65.0.139.82//leadsamerican-compo-legel/', user ,{headers: {
            'Content-Type': 'application/json'
        }});
    }

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
                <form className="Auth-form" onSubmit={submit}>
                    <div className='Section4_2_inputbox d-flex'>
                        <input className="Section4_2_input" type="text" 
                        id="firstname" name="firstname" 
                        placeholder='First Name' 
                        value={firstname}
                        required
                        onChange={e => setFirstname(e.target.value)}/>
                        <input className="Section4_2_input" type="text" id="lastname" 
                        name="lastname" placeholder='Last Name'
                        value={lastname}
                        required
                        onChange={e => setLastname(e.target.value)}/>
                        <input className="Section4_2_input" type="email" id="email" 
                        name="email" placeholder='Email'
                        value={email}
                        required
                        onChange={e => setEmail(e.target.value)}/>
                        <input className="Section4_2_input" type="number" id="phone" 
                        name="phone" placeholder='Phone'
                        value={phone}
                        required
                        onChange={e => setPhone(e.target.value)}/>
                        <textarea className="Section4_2_input messbox" type="text" id="message" 
                        name="message" placeholder='Type Your Message Here'
                        value={message}
                        required
                        onChange={e => setMessage(e.target.value)}/>
                    </div>
                    <button className="Section4_2_form_button" type="submit">
                        Submit
                    </button>
                </form>
            </div>
        </div>
        )}
