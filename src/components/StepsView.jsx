import React from "react";

import "../styles/StepsView.css";

import { Row, Col, Card } from "react-bootstrap";

import SignatureIcon from "../assets/icons/agreement-icon.png";
import RegularFolderIcon from "../assets/icons/folder-icon.png";
import TruckIcon from "../assets/icons/cargar-icon.png";

function StepsViews() {
  return (
    <Row className="start-step-card-row">
      <Col xs={12} sm={12} md={6} lg={4} className="start-step-col">
        <Card className="start-step-card">
          <Card.Header className="start-step-card-header">
            <img src={SignatureIcon} alt="Signature Icon" />
          </Card.Header>

          <Card.Body className="start-step-card-body">
            <h4 className="start-step-h4">Sign the agreement</h4>
          </Card.Body>

          <Card.Footer className="start-step-card-footer">
            <span className="third-color-span p-font">
              Just one page easy to fill out
            </span>
          </Card.Footer>
        </Card>
      </Col>

      <Col xs={12} sm={12} md={6} lg={4} className="start-step-col">
        <Card className="start-step-card">
          <Card.Header className="start-step-card-header">
            <img src={RegularFolderIcon} alt="Signature Icon" />
          </Card.Header>

          <Card.Body className="start-step-card-body">
            <h4 className="start-step-h4">Send the documents</h4>
          </Card.Body>

          <Card.Footer className="start-step-card-footer">
            <span className="third-color-span p-font">
              Hostel c Satyendranath Boys hostel Indore M.P.
            </span>
          </Card.Footer>
        </Card>
      </Col>

      <Col xs={12} sm={12} md={6} lg={4} className="start-step-col">
        <Card className="start-step-card">
          <Card.Header className="start-step-card-header">
            <img src={TruckIcon} alt="Signature Icon" />
          </Card.Header>

          <Card.Body className="start-step-card-body">
            <h4 className="start-step-h4">Start charging</h4>
          </Card.Body>

          <Card.Footer className="start-step-card-footer">
            <span className="third-color-span p-font">
              We send you the first loads
            </span>
          </Card.Footer>
        </Card>
      </Col>
    </Row>
  );
}

export default StepsViews;
