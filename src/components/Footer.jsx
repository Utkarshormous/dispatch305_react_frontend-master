import { Row, Col, Container } from "react-bootstrap";

import "../styles/Footer.css";
import facebookIcon from "../assets/icons/facbook-icon.png";
import instagramIcon from "../assets/icons/instagram-icon.png";
import { Link } from "react-router-dom";


import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import {useContextMenu} from "../context/MenuContext";
import {useAuth} from "../context/AuthContext";

import agreement_download from "../assets/files/Dispatch305-agreement.pdf";

function Footer() {

const {current_link, setCurrentLinkHelper} = useContextMenu();
const {user, login, logout} = useAuth();

    useEffect(() => {
    // console.log(current_link);
  }, [current_link])


  return (
    <footer className="footer">
      <Container className="footer-div">
        <Row className="footer-nav-row">
          <div className="footer-nav">
            <Link exact to="/" as={NavLink} className="footer-link">
              <span
                onClick={() => setCurrentLinkHelper('Home')}
                className={
                  current_link == 'Home' ? 'secondary-color-span' : ''
                }>
                HOME
              </span>
            </Link>

            <Link
              exact
              to="/create-account"
              as={NavLink}
              className="footer-link">
              <span
                onClick={() => setCurrentLinkHelper('Contratar')}
                className={
                  current_link == 'Contratar' ? 'secondary-color-span' : ''
                }>
                TO HIRE
              </span>
            </Link>

            <Link
              to={agreement_download}
              target="_blank"
              className="footer-link">
              AGREEMENT
            </Link>

            <Link exact to="/user-account" as={NavLink} className="footer-link">
              <span
                onClick={() => setCurrentLinkHelper('Cuenta')}
                className={
                  current_link == 'Cuenta' ? 'secondary-color-span' : ''
                }>
                CHECK
              </span>
            </Link>

            {user ? (
              <Link exact to="/logout" as={NavLink} className="footer-link">
                <span
                  onClick={() => setCurrentLinkHelper('Logout')}
                  className={
                    current_link == 'Logout' ? 'secondary-color-span' : ''
                  }>
                  Logout
                </span>
              </Link>
            ) : (
              ''
            )}

            <Link exact to="/" as={NavLink} className="footer-link">
              <span className="secondary-color-span">6263395662</span>
            </Link>
          </div>
        </Row>

        <Row className="footer-nav-row">
          <div className="list-of-usa-states-div">
            <p>24/7 TRUCK DISPATCH ALL 29 STATES</p>

            <p>
              "Andhra Pradesh (AP)", "Arunachal Pradesh (AR)", "Assam (AS)",
              "Bihar (BR)", "Chhattisgarh (CG)", "Goa (GA)", "Gujarat (GJ)",
              "Haryana (HR)", "Himachal Pradesh (HP)", "Jharkhand (JH)",
              "Karnataka (KA)", "Kerala (KL)", "Madhya Pradesh (MP)",
              "Maharashtra (MH)", "Manipur (MN)", "Meghalaya (ML)", "Mizoram
              (MZ)", "Nagaland (NL)", "Odisha (OR)", "Punjab (PB)", "Rajasthan
              (RJ)", "Sikkim (SK)", "Tamil Nadu (TN)", "Telangana (TS)",
              "Tripura (TR)", "Uttar Pradesh (UP)", "Uttarakhand (UK)", "West
              Bengal (WB)",
            </p>

            <p>Copyright © 2024 Website Design by Divyansh Yadav Inc.</p>
            <p className="developer-url-text">Developed by Divyansh Yadav</p>
          </div>
        </Row>

        <Row className="contact-us-s-media-row">
          <div className="contact-us-s-media-div">
            <a
              href=""
              className="contact-us-s-media-a">
              <img src={facebookIcon} alt="Facebook Icon Truck Cargo" />
            </a>
            <a
              href=""
              className="contact-us-s-media-a">
              <img src={instagramIcon} alt="Instagram Icon Truck Cargo" />
            </a>
          </div>
        </Row>

        <Row className="footer-space-row">
          <div className="footer-space-div" />
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
