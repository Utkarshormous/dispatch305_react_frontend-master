import React from "react";

import { useEffect, useState } from "react";


import "../styles/ContactUs.css";

import { Row, Col, Form, Button } from "react-bootstrap";

import correctIcon from "../assets/icons/correct-icon.png";

import axios from "axios"



const domain = process.env.REACT_APP_API_DOMAIN_NAME



function ContactUs() {

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [comment, setComment] = useState("");



  const body = JSON.stringify({
    email,
    name,
    phone,
    comment,
  })


  const sendCommentHandler = async(e) => {
    e.preventDefault();
    if(!name || !email || !comment || !phone){
      alert("Please complete all the fields")
    }

    else{
      await sendComment(body);
      setEmail("");
      setName("");
      setPhone("");
      setComment("")
    }
  }


  return (
    <Row className="contact-us-row">
      <Col xs={12} sm={12} md={6} lg={6} className="contact-us-col">
        <div className="contact-us-col-body contact-us-col-first">
          <p className="contact-us-tag-p">Contact Us</p>

          <h2 className="contact-us-tag-h2">
            Don't wait any longer to contact us, we are here to find the best
            rates in the industry for you
          </h2>
        </div>
      </Col>

      <Col xs={12} sm={12} md={6} lg={6} className="contact-us-col">
        <div className="contact-us-col-body contact-us-col-second">
          <p className="contact-us-tag-p">
            <span className="tspan">Contact Us</span>
          </p>

          <Form onSubmit={(e) => sendCommentHandler(e)}>
            <Form.Group
              className="mb-3 contact-us-form-group"
              controlId="formBasicName">
              <Form.Control
                type="text"
                className="contact-us-form-control"
                placeholder="NAME"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>

            <Form.Group
              className="mb-3 contact-us-form-group"
              controlId="formBasicPhone">
              <Form.Control
                type="text"
                className="contact-us-form-control"
                placeholder="PHONE NO."
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </Form.Group>

            <Form.Group
              className="mb-3 contact-us-form-group"
              controlId="formBasicEmail">
              <Form.Control
                type="email"
                className="contact-us-form-control"
                placeholder="EMAIL"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group
              className="mb-3 contact-us-message"
              controlId="formBasicMessage">
              <Form.Control
                as="textarea"
                className="contact-us-control-message"
                placeholder="MESSAGE"
                rows={3}
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
            </Form.Group>
            <Button
              variant="primary"
              className="contact-us-button"
              type="submit">
              SEND MESSAGE
            </Button>
          </Form>
        </div>
      </Col>
    </Row>
  );
}



const sendComment = async(body) => {

  const config = {
    headers:{
      'Content-Type': 'application/json'
    }
  }

  const url = `${domain}/message/create-comment`;

  const axios_result = await axios.post(url, body, config).then(async(res) => {
    const result = await res.data
  }).catch((error) => {
  })

}






export default ContactUs;
