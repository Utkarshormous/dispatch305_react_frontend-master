import React from "react";

import "../styles/ClavesSteps.css";

import { Row, Col, Card } from "react-bootstrap";

import correctIcon from "../assets/icons/correct-icon.png";

function ClavesSteps() {
  return (
    <Row className="claves-para-exito-row">
      <Col xs={12} sm={12} md={6} lg={6} className="claves-para-exito-col">
        <div className="claves-para-exito-col-body  claves-para-exito-col-first">
          <div className="v-card-icon-div"></div>
          <div className="claves-para-exito-button-div">
            <p className="claves-para-exito-button-p">KEYS TO SUCCESS</p>
          </div>

          <div className="spacer" />

          <div className="claves-para-exito-card">
            <div className="claves-para-exito-header-div">
              <div className="claves-para-exito-icon-div">
                <img src={correctIcon} alt="Correct Truck Cargo" />
              </div>
              <div className="v-spacer"></div>
              <div className="claves-para-exito-card-body">
                <div className="claves-para-exito-title-div">
                  <p className="claves-para-exito-title-p">
                    SERVICE AT A FAIR PRICE
                  </p>
                </div>

                <div className="claves-text-div">
                  <div className="claves-paragraph-div">
                    <p>
                      Don't pay more than you need or hidden fees, You will
                      receive quality service with a price always appropriate
                      because the more you earn, the more we We received
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="spacer" />

          <div className="claves-para-exito-card">
            <div className="claves-para-exito-header-div">
              <div className="claves-para-exito-icon-div">
                <img src={correctIcon} alt="Correct Truck Cargo" />
              </div>
              <div className="v-spacer"></div>
              <div className="claves-para-exito-card-body">
                <div className="claves-para-exito-title-div">
                  <p className="claves-para-exito-title-p">
                    SPECIALIZED DISPATCH
                  </p>
                </div>

                <div className="claves-text-div">
                  <div className="claves-paragraph-div">
                    <p>
                      Our service focuses on your objective needs, Well, each
                      client chooses which area they want to work, what type of
                      load you want to move, what hours you want to work and the
                      rest
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="spacer" />

          <div className="claves-para-exito-card">
            <div className="claves-para-exito-header-div">
              <div className="claves-para-exito-icon-div">
                <img src={correctIcon} alt="Correct Truck Cargo" />
              </div>
              <div className="v-spacer"></div>
              <div className="claves-para-exito-card-body">
                <div className="claves-para-exito-title-div">
                  <p className="claves-para-exito-title-p">GREAT COMPLEMENT</p>
                </div>

                <div className="claves-text-div">
                  <div className="claves-paragraph-div">
                    <p>
                      Save time and don't worry about paperwork, we can complete
                      your dispatch service by taking care of uploading your
                      POD, Rate, Lumper, etc. to your factoring so you can get
                      paid for your work on time.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Col>

      <Col xs={12} sm={12} md={6} lg={6} className="claves-para-exito-col">
        <div className="claves-para-exito-col-body claves-para-exito-col-second">
          <p className="claves-para-exito-tag-p">About us</p>

          <h2 className="claves-para-exito-tag-h2">
            Dispatch 305 is a service specially designed for owners and small
            freight companies.
          </h2>

          <h2 className="claves-para-exito-tag-h2">
            We have dedicated tools, as well as extensive experience in the
            freight industry to offer you the best price every day
          </h2>
        </div>
      </Col>
    </Row>
  );
}

export default ClavesSteps;
