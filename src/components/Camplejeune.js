import React from 'react';

export function Camplejeune() {

    return (
        <div className="Section6">
            <div className="Section6_1">
                <img className="Section6_image" src="https://www.rmf.com/wp-content/uploads/2015/07/leueune_1-1200x675.jpg" alt=""></img>
                <p className="Section6_heading">Camp lejeune</p>
            </div>
            <div className="d-flex gap-4">
                <div className="Section6_2">
                    <div className="Section6_2_1">
                        <h3 className="Section6_heading1">Camp lejeune Lawsuit</h3>
                        <p className="Section6_heading2">Did Camp Lejeune's contaminated drinking water cause you or a family member side effects ?</p>

                        <p className="Section6_heading2">If yes, then pay attention, you might be eligible for medical compensation.</p>

                        <p className="Section6_heading2">Two wells in North Carolina's U.S. Marine Base Camp Lejeune was contaminated with harmful chemicals between the years 1953 and 1987.</p>

                        <p className="Section6_heading2">70+ harmful chemicals like trichloroethylene (TCE), perchloroethylene (PCE), benzene and vinyl chloride were found in drinking water at Camp Lejeune - these are known Carcinogens.</p>
                    </div>
                    
                </div>
             </div>   

            <div className="Section4 d-flex">
                <div className="Section6_3">
                        <h3 className="Section6_heading1_1">What is Camp lejeune?</h3>
                        <p className="Section6_heading2_1">Contaminated water contains harmful chemicals which have caused cancer like diseases.</p>

                        <p className="Section6_heading2_1">Cancers like bladder cancer, kidney cancer, multiple myeloma, lung cancer, breast cancer, leukemia, esophageal cancer, and non-Hodgkin's lymphoma.</p>

                        <p className="Section6_heading2_1">Due to chemicals in the drinking water, many from the military or their families witnessed the side effects in their health. This caused undue suffering, permanent disability, and loss.</p>

                        <p className="Section6_heading2_1">So if you or any of your family members served at Camp Lejeune and were diagnosed with side effects, then you can contact us for your medical claim.</p>
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
        </div>
    )}