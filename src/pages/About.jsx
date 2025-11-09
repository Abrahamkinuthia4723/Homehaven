import React from "react";
import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import AboutSection from "../components/UI/AboutSection";
import { Container, Row, Col } from "reactstrap";
import OurMembers from "../components/UI/OurMembers";
import "../styles/about.css";

const About = () => {
  return (
    <Helmet title="About">
      <CommonSection title="About Us" />
      <AboutSection aboutClass="aboutPage" />

      <section className="about__page-section">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12">
              <div className="about__page-img">
              <img src="https://media.licdn.com/dms/image/C5112AQGLtwsEpeEfqQ/article-cover_image-shrink_600_2000/0/1520114095302?e=2147483647&v=beta&t=V_y8ANhHF0F8oqb9oWR-snzGz4L_FYTuD6P5sSaXBrU" alt="" style={{ width: "auto", height: "500px" }} className="w-100 rounded-3" />
              </div>
            </Col>

            <Col lg="6" md="6" sm="12">
              <div className="about__page-content">
                <h2 className="section__title">
                  We Are Committed To Provide Comfortable housing for all.
                </h2>

                <p className="section__description">
                Welcome to our enchanting house rental sanctuary, where your dream home awaits just a click away! Embark on a journey of discovery through our captivating website, meticulously crafted to elevate your house-hunting experience to new heights of elegance and ease.

                Step into a world of refined simplicity as you glide effortlessly through our intuitive interface, designed to enchant and inspire. With a treasure trove of listings spanning the globe, each abode exudes its own unique charm, ready to captivate hearts and transform dreams into reality.


                </p>

                <p className="section__description">
                Indulge your senses as you feast your eyes on stunning visuals that bring each property to life in vivid detail. From panoramic vistas to intricate architectural details, every image tells a story, inviting you to imagine the possibilities and envision the life you've always dreamed of.

                At the heart of our enchanting oasis lies a commitment to your safety and security. With state-of-the-art encryption and privacy protocols, you can browse with confidence, knowing that your information is protected and your privacy respected.

                So, come, wander through our virtual halls, and let the magic of our house rental sanctuary transport you to a world where dreams come true. Your perfect home awaits, just a heartbeat away
                </p>

                <div className=" d-flex align-items-center gap-3 mt-4">
                  <span className="fs-4">
                    <i class="ri-phone-line"></i>
                  </span>

                  <div>
                    <h6 className="section__subtitle">Need Any Help?</h6>
                    <h4>0113374993</h4>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
    
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">Experts</h6>
              <h2 className="section__title">Our Members</h2>
            </Col>
            <OurMembers />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default About;
