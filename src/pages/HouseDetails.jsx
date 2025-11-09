import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Card, CardBody, CardTitle, CardText, Alert } from "reactstrap";
import HouseData from "../assets/data/HouseData";
import ReviewData from "../assets/data/ReviewData";
import CommonSection from "../components/UI/CommonSection";

const HouseDetails = () => {
  const { id } = useParams();
  const house = HouseData.find((h) => h.id === parseInt(id));

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  if (!house) {
    return <p className="text-center mt-5">House not found.</p>;
  }

  const reviews = ReviewData.filter((review) => review.houseId === house.id);

  return (
    <div>
      <CommonSection title={house.name} />

      <Container className="my-5">
        {/* House Image */}
        <img
          src={house.imgUrl}
          alt={house.name}
          className="img-fluid rounded mb-4 shadow"
          style={{ height: "400px", width: "100%", objectFit: "cover" }}
        />

        {/* Description */}
        <Card className="mb-4 shadow-sm">
          <CardBody>
            <CardTitle tag="h4">Description</CardTitle>
            <CardText>{house.description}</CardText>
          </CardBody>
        </Card>

        {/* Availability Section */}
        <Card className="mb-4 shadow-sm">
          <CardBody>
            <CardTitle tag="h5">Check Availability</CardTitle>
            <Row className="mt-3">
              <Col md={6} className="mb-3">
                <label>Start Date:</label>
                <input
                  type="date"
                  className="form-control"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                />
              </Col>
              <Col md={6} className="mb-3">
                <label>End Date:</label>
                <input
                  type="date"
                  className="form-control"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                />
              </Col>
            </Row>
            {startDate && endDate && (
              <Alert color={house.availability ? "success" : "warning"} className="mt-3">
                Selected stay: <strong>{startDate}</strong> to <strong>{endDate}</strong>.{" "}
                {house.availability
                  ? "House is available!"
                  : "House might not be available on these dates."}
              </Alert>
            )}
          </CardBody>
        </Card>

        <h5 className="mb-3">Customer Reviews</h5>
        {reviews.length > 0 ? (
          <Row>
            {reviews.map((r, index) => (
              <Col md={6} key={index} className="mb-3">
                <Card className="shadow-sm h-100">
                  <CardBody>
                    <CardTitle tag="h6" className="mb-1">
                      {r.name} - ⭐ {r.rating}/5
                    </CardTitle>
                    <CardText>{r.comment}</CardText>
                    <small className="text-muted">{r.date}</small>
                  </CardBody>
                </Card>
              </Col>
            ))}
          </Row>
        ) : (
          <p>No reviews yet.</p>
        )}

        <div className="text-center mt-5">
          <Alert color="info" className="py-3 px-4">
            Contact us to book. We’ll get in touch to discuss details.
          </Alert>
        </div>
      </Container>
    </div>
  );
};

export default HouseDetails;
