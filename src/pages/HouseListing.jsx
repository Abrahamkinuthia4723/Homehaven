import React from "react";
import { Container, Row } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import HouseItem from "../components/UI/HouseItem";
import HouseData from "../assets/data/HouseData";

const HouseListing = () => {
  return (
    <Helmet title="Houses">
      <CommonSection title="House Listing" />

      <section>
        <Container>
          <Row>
            {HouseData.map((item) => (
              <HouseItem item={item} key={item.id} />
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default HouseListing;
