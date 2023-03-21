import React from 'react';

export function Nec() {

    return (
        <div className="Section6">
            <div className="Section6_1">
                <img className="Section6_image" src="https://www.gblawyers.com/css/formula/enfamil-similac-premature-formula.jpg" alt=""></img>
                <p className="Section6_heading">NEC</p>
            </div>
            <div className="d-flex gap-4">
                <div className="Section6_2">
                    <div className="Section6_2_1">
                        <h3 className="Section6_heading1">NEC Lawsuit</h3>
                        <p className="Section6_heading2">Need help in filing for an NEC lawsuit ?</p>

                        <p className="Section6_heading2">Parents of premature babies are filing case against the manufacturers of Similac and Enfamil.</p>

                        <p className="Section6_heading2">Similac and Enfamil are used to feed babies for their growth and development by fulfilling their daily nutritional needs.</p>

                        <p className="Section6_heading2">The filling is against Mead Johnson (maker of Enfamil) and Abbott (maker of Similac) as they are not giving any warnings about the potential harm that may cause to the babies.</p>
                    </div>
                    <div className="Section6_3">
                        <h3 className="Section6_heading1_1">What is NEC?</h3>
                        <p className="Section6_heading2_1">NEC (Necrotizing enterocolitis) is a gastrointestinal condition that affects the intestines of premature babies causing intestinal inflammation which may also lead to death.</p>

                        <p className="Section6_heading2_1">A study of 1,500+ newborns finding a lower number of NEC in those who consumed only breast milk. A study of Cochrane over 1,900 premature infants found 7 times higher rates of NEC due to the consumption of cow-milk-based formulas.</p>

                        <p className="Section6_heading2_1">In 2011, U.S. Surgeon General's Call to Action to Support Breastfeeding premature infants who are not fed with human breast milk are 138% more likely to develop NEC.</p>

                        <p className="Section6_heading2_1">In 2021 from Journal of The American Academy of Pediatrics found 77% reduction in NEC premature infants given exclusively human breast milk.</p>
                    </div>
                </div>

                <div className="Section6_2_form_box">
                    <p className="Section6_2_heding1">Contact Us</p>
                    <form className="Auth-form">
                        <div className='Section6_2_inputbox d-flex'>
                            <input className="Section4_2_input" type="text" id="fname" name="fname" placeholder='First Name'/>
                            <input className="Section4_2_input" type="text" id="lname" name="lname" placeholder='Last Name'/>
                            <input className="Section4_2_input" type="text" id="email" name="email" placeholder='Email'/>
                            <input className="Section4_2_input" type="text" id="phone" name="phone" placeholder='Phone'/>
                            <textarea className="Section4_2_input messbox" type="text" id="message" name="message" placeholder='Type Your Message Here'/>
                        </div>
                        <button className="Section6_2_form_button" type="submit">
                            Submit
                        </button>
                    </form>
            </div>

            </div>
        </div>
    )}