import React from "react";
import "../styles/Service.css";

import { Button, Row, Col, Form } from "react-bootstrap";

import SimpleBanner from "../components/SimpleBanner";

import dollarIcon from "../assets/icons/money-icon.png";
import banner5 from "../assets/images/banner5.jpeg";
import { Link } from "react-router-dom";

export default function Service() {
  return (
    <div>
      <SimpleBanner
        banner_img={banner5}
        banner_img_description={'Service Detail Truck Cargo'}
      />

      <div className="spacer" />

      <h2 className="text-center service-custom-header2">
        <span className="service-din-alternate-bold-font">
          Choose the service of your preference
        </span>
      </h2>

      <div className="service-dollar-icon-div">
        <img src={dollarIcon} alt="Folder Icon Truck Cargo" />
      </div>

      <h4 className="text-center service-custom-title">
        And you can get the following services
      </h4>

      <div className="service-plans-div">
        <h4 className="service-plan-title">4% BASIC PLAN</h4>
        <p className="service-p">
          Cargo offers for the destination you prefer
          <br />
          Suggestion of return loads or to other destinations with a better rate
          mile
          <br />
          Setup with new brokers
        </p>
      </div>

      <div className="service-plans-div">
        <h4 className="service-plan-title">6% VIP PLAN</h4>
        <p className="service-p">
          Cargo offers for the destination you prefer
          <br />
          Suggestion of return loads or to other destinations with a better rate
          mile
          <br />
          Setup with new brokers
          <br />
          Negotiation for Detention or Layovers
          <br />
          Sending documents to your Factoring company
          <br />
          Weekly analysis by truck
        </p>
      </div>

      <div className="service-button-div">
        <Link to="/create-account">
          <Button variant="primary" className="service-button">
            START NOW !
          </Button>
        </Link>
      </div>
    </div>
  );
}
