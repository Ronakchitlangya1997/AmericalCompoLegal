import React, { useState, useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Dropdown from 'react-bootstrap/Dropdown';

export function Header() {

    const navbar = {
        background: "#FFFFFF",
        padding: "0"
      };

    const navbar_subtitle={
        justifyContent: "center",
        margin: "0px 10px"
    }

    const navbar_subtitle_fonts = {
        fontFamily: 'revert',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: "18px",
        lineHeight: "31px",
        alignItems: "center",
        color: "#0F2B61",
        background: "white",
        border: '0'
    }

  const imgSize = {
    width: "auto",
    height: "75px"
  }

    return (
        <Navbar style={navbar} expand="lg">
            <div className="navbar_title">
              <img src="https://americancompo.s3.ap-south-1.amazonaws.com/logo_final_final.png" width="70" style={imgSize}></img>
              <h5 className="navbar_title_font" id='logText'>American Compo Legal</h5>
            </div>
                {/* <Navbar.Brand style={navbar_title}><h5>American Compo Legal</h5></Navbar.Brand> */}

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" style={navbar_subtitle}>
              <Nav className="dropbtn sizeOfNavbar">
                <Nav.Link style={navbar_subtitle_fonts} href="/">Home</Nav.Link>
                <Nav.Link style={navbar_subtitle_fonts} href="#link">About Us</Nav.Link>
                <Dropdown className='dropdownbtn'>
                  <Dropdown.Toggle style={navbar_subtitle_fonts} variant="success" id="dropdown-basic">
                  Active Lawsuits
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item className='dropdownbtntext' href="/zantac">Zantac</Dropdown.Item>
                    <Dropdown.Item className='dropdownbtntext' href="/Paraquat">Paraquat</Dropdown.Item>
                    <Dropdown.Item className='dropdownbtntext' href="/nec">NEC</Dropdown.Item>
                    <Dropdown.Item className='dropdownbtntext' href="/camplejeune">Camp Lejeune</Dropdown.Item>
                    <Dropdown.Item className='dropdownbtntext' href="/hairrelaxer">Hair Relaxer</Dropdown.Item>
                    <Dropdown.Item className='dropdownbtntext' href="/talcum">Talcum</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>  
                {/* <Nav.Link style={navbar_subtitle_fonts} href="#link">Active Lawsuits</Nav.Link> */}
                <Nav.Link style={navbar_subtitle_fonts} href="#link">Feedback</Nav.Link>            
              </Nav>
            </Navbar.Collapse>

            <div className="navbar_title_last">
            <h5 className="navbar_title_last_font">Call Now</h5>
            </div>
        </Navbar>
      );
}
