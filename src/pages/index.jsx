import React from "react";
import "../styles/Landing.css";
import BannerCarousel from "../components/BannerCarousel";
import ServiceGrid from "../components/ServiceGrid";
import StepsViews from "../components/StepsView";

import { Button, Row, Col } from "react-bootstrap";
import ServiceBanner from "../components/ServiceBanner";
import ClavesSteps from "../components/ClavesSteps";
import ContactUs from "../components/ContactUs";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div>
      <BannerCarousel />
      <div className="banner-spacer" />

      <p className="text-center">
        <span className="third-color-span p-header-font">What we offer</span>
      </p>

      <h2 className="text-center landing-custom-header2">
        <span className="secondary-color-span landing-din-alternate-bold-font">
          Our services
        </span>
      </h2>

      <div className="landing-paragraph">
        <p>
          <span className="third-color-span p-font">
            We are a small group of dispatchers with extensive experience in dry
            and refrigerated loads, as well as flat beds, focused on searching
            and negotiate the best price with brokers and
          </span>
          <br />
          <span className="third-color-span p-font">
            By working with your own Authority you are the owner at all times of
            the service we are offering, confirmations arrive directly to your
            email and the brokers were
          </span>
        </p>
      </div>

      <div className="spacer-25" />
      <ServiceGrid />

      <div className="spacer" />

      <h2 className="text-center landing-custom-header2">
        <span className="landing-din-alternate-bold-font">
          Getting started is very easy
        </span>
      </h2>

      <div className="start-step-div">
        <StepsViews />

        <div className="comenzar-button-div">
          <Link to="/create-account">
            <Button variant="primary" className="comenzar-button">
              START NOW !
            </Button>
          </Link>
        </div>
      </div>

      <div className="spacer" />

      <ServiceBanner />

      <div className="spacer-100" />

      <div className="claves-para-exito-div">
        <ClavesSteps />
      </div>

      <div className="spacer" />

      <div className="contact-banner">
        <h1 className="contact-banner-title-h2">LOAD YOUR TRUCK</h1>
      </div>

      <div className="spacer" />

      <div className="contact-us-div">
        <ContactUs />
      </div>
    </div>
  );
}
