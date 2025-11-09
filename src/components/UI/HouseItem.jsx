import React from "react";
import { Col } from "reactstrap";
import { useNavigate } from "react-router-dom";
import "../../styles/house-item.css";

const HouseItem = ({ item }) => {
  const { id, name, imgUrl, rating, price, description } = item;
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/house/${id}`);
  };

  return (
    <Col lg="4" md="6" sm="12" className="mb-4">
      <div className="house-item text-center">
        <div className="house-img">
          <img
            src={imgUrl}
            alt={name}
            className="img-fluid"
            style={{ height: "280px", objectFit: "cover" }}
          />
        </div>

        <div className="house-item-content mt-3">
          <h5 className="house-name">{name}</h5>
          <div className="house-rating mb-2">
            {[...Array(Math.floor(rating))].map((_, index) => (
              <i key={index} className="ri-star-s-fill"></i>
            ))}
            {rating % 1 !== 0 && <i className="ri-star-s-half-fill"></i>}
          </div>
          <p className="house-description">{description}</p>
          <h6 className="house-price">
            sh {price}.00 <span>/ Day</span>
          </h6>

          <button
            className="btn btn-primary mt-3"
            onClick={handleViewDetails}
          >
            View Details
          </button>
        </div>
      </div>
    </Col>
  );
};

export default HouseItem;
