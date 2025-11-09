import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import "../styles/contact.css";

const socialLinks = [
  {
    url: "#",
    icon: "ri-facebook-line",
  },
  {
    url: "#",
    icon: "ri-instagram-line",
  },
  {
    url: "#",
    icon: "ri-linkedin-line",
  },
  {
    url: "#",
    icon: "ri-twitter-line",
  },
];

const Contact = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const formSubmit = (e) => {
    e.preventDefault();

    const newValue = {
      fname,
      lname,
      phone,
      email,
      message,
    };

    console.log(newValue);

    setFname("");
    setLname("");
    setPhone("");
    setEmail("");
    setMessage("");
  };

  return (
    <Helmet title="Contact">
      <Container>
        <Row className="contact mtop">
          <Col lg="7" md="7">
            <div className="main-content">
              <h2>Contact Form</h2>
              <p>Fill out the form below in order to start renting your dream home.</p>

              <form onSubmit={formSubmit}>
                <div className="grid1">
                  <div className="input">
                    <span>
                      First Name <label>*</label>
                    </span>
                    <input
                      type="text"
                      name="fname"
                      value={fname}
                      onChange={(e) => setFname(e.target.value)}
                      required
                    />
                  </div>
                  <div className="input">
                    <span>
                      Last Name <label>*</label>
                    </span>
                    <input
                      type="text"
                      name="lname"
                      value={lname}
                      onChange={(e) => setLname(e.target.value)}
                      required
                    />
                  </div>
                  <div className="input">
                    <span>
                      Phone Number <label>*</label>
                    </span>
                    <input
                      type="text"
                      name="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                    />
                  </div>
                  <div className="input">
                    <span>
                      Email <label>*</label>
                    </span>
                    <input
                      type="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="input inputlast">
                  <span>
                    Write Your Message <label>*</label>
                  </span>
                  <textarea
                    cols="30"
                    rows="10"
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="primary-btn">
                  Submit Now
                </button>
              </form>
            </div>
          </Col>
          <Col lg="5" md="5">
            <div className="contact__info">
              <h6 className="fw-bold">Contact Information</h6>
              <p className="section__description mb-0">Prestige, Nairobi.</p>
              <div className="d-flex align-items-center gap-2">
                <h6 className="fs-6 mb-0">Phone:</h6>
                <p className="section__description mb-0">0113374993</p>
              </div>
              <div className="d-flex align-items-center gap-2">
                <h6 className="mb-0 fs-6">Email:</h6>
                <p className="section__description mb-0">
                  abrahamkinuthi193@gmail.com
                </p>
              </div>
              <h6 className="fw-bold mt-4">Follow Us</h6>
              <div className="d-flex align-items-center gap-4 mt-3">
                {socialLinks.map((item, index) => (
                  <Link
                    to={item.url}
                    key={index}
                    className="social__link-icon"
                  >
                    <i className={item.icon}></i>
                  </Link>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Helmet>
  );
};

export default Contact;
