import React from 'react';
import { useState } from 'react';
import axios from 'axios';

export function Contact() {
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
        }catch {

        }
    }

   let businessEmailBtn = document.getElementById('email');
   let submitBtn = document.getElementById('submitBtnId');
   let firstValidation = document.getElementById('fname');
   let lastNameValidation = document.getElementById('lname');
   let phoneValidation = document.getElementById('phone');
   let messageContent = document.getElementById('messageContact');
    function ValidateEmail() {
        var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        var val = businessEmailBtn.value;
        if (val.match(validRegex) || val.length === 0) {
           document.getElementById('emailMessage').style.display = "none";
           businessEmailBtn.style.border ='1px solid #ced4da';
           submitBtn.disabled = false;
           validation();
         } else {
           document.getElementById('emailMessage').style.display = "block";	
           businessEmailBtn.style.border = '2px solid red';
           submitBtn.disabled = true;
           validation();
         }
      }

      function validation( ) {
        if(firstValidation.value && lastNameValidation.value && phoneValidation.value && businessEmailBtn.value.length > 0 && businessEmailBtn.validity.valid && messageContent.value){
            submitBtn.disabled = false;
        }else{
            submitBtn.disabled = true;
        }
      }

    return (
        <div className="Section4 d-flex" id="contactUsId">
            <div className="Section4_1">
                <img src="https://americancompo.s3.ap-south-1.amazonaws.com/Stamp_Image.png"></img>
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
                {submitted && <div>
                <img className="formsubmit_success" src="https://americancompo.s3.ap-south-1.amazonaws.com/GreenTickFinal.gif"></img>
                <p id="submit-success-id">Successfully Submitted!</p>
                </div>
                }
                {formsubmitted && <form className="Auth-form" onSubmit={contactUsSubmit}>
                    <div className='Section4_2_inputbox d-flex'>
                        <input className="Section4_2_inputTop" type="text" id="fname" name="fname" placeholder='First Name' onChange={(event) => {setFirstName(event.target.value); validation()}}/>
                        <input className="Section4_2_inputContact" type="text" id="lname" name="lname" placeholder='Last Name'onChange={(event) => {setLastName(event.target.value) ; validation()}}/>
                        <input className="Section4_2_inputContact" type="email" id="email" name="email" placeholder='Email' onChange={(event) => {setEmail(event.target.value); ValidateEmail()}}/>
                        <span id='emailMessage' className="emailError">Email id is not valid</span>
                        <input className="Section4_2_inputContact" type="text" id="phone" name="phone" placeholder='Phone' onChange={(event) => {setPhone(event.target.value) ; validation()}}/>
                        <textarea className="Section4_2_inputTextArea messbox" type="text" id="messageContact" name="message" placeholder='Type Your Message Here' onChange={(event) => {setMessage(event.target.value) ;validation()}}/>
                    </div>
                    <button className="Section4_2_form_button" id='submitBtnId' type="submit" disabled>
                        Submit
                    </button>
                </form>}
            </div>
        </div>
        )}