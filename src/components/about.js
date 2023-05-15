import React from 'react';

const imgSize  = {
    width:"100%"
}

export function About() {

    return (
        <div className="Section2 d-flex ">
            <div className="section2_1 reveal">
                <p className="section2_1_heading1">Why Choose</p>
                <p className="section2_1_heading2">American Compo Legal</p>
                <p className="section2_1_heading3">
                Choose our company for your personal injury case because we work on a contingency fee basis and connect you to the best attorney for your case. We provide personal counseling to ensure a detailed understanding of your case and a smooth compensation process. Additionally, we guarantee 100% privacy for your sensitive information.
                </p>
            </div>
            <div className="section2_2 d-flex reveal">
                <div className="section2_2_1">
                    <p className="section2_2_1_heading1">No Win, No Fee</p>
                    <p className="section2_2_1_heading2">
                    We work on a contingency fee basis which means we 
                    will only be paid when we win your case because we 
                    understand your concern.
                    </p>
                </div>
                <div className="section2_2_1">
                    <p className="section2_2_1_heading1">Top Attorneys</p>
                    <p className="section2_2_1_heading2">
                    To increase the chances of winning your case, American Compo Legal connects 
                    you to the best attorney who is perfectly suitable for your personal injury case.
                    </p>
                </div>
                <div className="section2_2_1">
                    <p className="section2_2_1_heading1">Free Consultation</p>
                    <p className="section2_2_1_heading2">
                    To understand your personal injury case in detail with 100% accuracy, we provide you with personal counseling that can 
                    assist you in either settling the case or bringing the claim to trial.
                    </p>
                </div>
                <div className="section2_2_1">
                    <p className="section2_2_1_heading1">Detailed Analysis</p>
                    <p className="section2_2_1_heading2">
                    To make a smooth compensation process for personal injury & 
                    medical malpractices, we go with a detailed analysis so that we can 
                    ensure an effective negotiation and not to miss a single chance.
                    </p>
                </div>
                <div className="section2_2_1">
                    <p className="section2_2_1_heading1">100% Privacy Maintenance</p>
                    <p className="section2_2_1_heading2">
                    Don’t worry, we understand your concern which is sensitive in nature and can not be 
                    shared with anyone, so we provide you with 100% privacy for your case.
                    </p>
                </div>
                <div className="section2_2_1">
                    <img src="https://americancompo.s3.ap-south-1.amazonaws.com/Case+solved.png" width="360" style={imgSize}></img>
                    <div className="section2_2_1_box">
                        <p className="section2_2_1_box_heading1">3500+</p>
                        <p className="section2_2_1_box_heading2">Clients Helped</p>
                    </div>
                </div>
            </div>
        </div>
    )}
