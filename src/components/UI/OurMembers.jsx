import React from "react";
import "../../styles/our-member.css";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";

const OUR_MEMBERS = [
  {
    name: "Noh Suk-Min",
    experience: "15 years of experience",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl:"https://www.chinaattila.com/wp-content/uploads/2023/12/1157.jpg" ,
  },

  {
    name: "Kim Yoo-Jung",
    experience: "6 years of experience",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: "https://voguesg.s3.ap-southeast-1.amazonaws.com/wp-content/uploads/2023/12/03205745/my-demon-3_gallery.jpg",
  },

  {
    name: "Song Kang",
    experience: "8 years of experience",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: "https://cdn.i-scmp.com/sites/default/files/d8/images/canvas/2023/11/30/20267148-c9f7-4fd6-85b0-506dcefea0ed_e4b61778.jpg",
  },

  {
    name: "Kim Hae Sook",
    experience: "30 years of experience",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: "https://static1.srcdn.com/wordpress/wp-content/uploads/2023/12/kim-hae-sook-as-joo-cheon-sook-in-my-demon.jpg",
  },
];

const OurMembers = () => {
  return (
    <>
      {OUR_MEMBERS.map((item, index) => (
        <Col lg="3" md="3" sm="4" xs="6" key={index} className="mb-4">
          <div className="single__member">
            <div className="single__member-img">
              <img src={item.imgUrl} style={{ width: "100%", height: "240px" }} alt={item.name} />
              <div className="single__member-social">
                <Link to={item.fbUrl}>
                  <i className="ri-facebook-line"></i>
                </Link>
                <Link to={item.twitUrl}>
                  <i className="ri-twitter-line"></i>
                </Link>

                <Link to={item.linkedinUrl}>
                  <i className="ri-linkedin-line"></i>
                </Link>

                <Link to={item.instUrl}>
                  <i className="ri-instagram-line"></i>
                </Link>
              </div>
            </div>

            <h6 className="text-center mb-0 mt-3">{item.name}</h6>
            <p className="section__description text-center">
              {item.experience}
            </p>
          </div>
        </Col>
      ))}
    </>
  );
};

export default OurMembers;
