import React from "react";
import Slider from "react-slick";

import "../../styles/testimonial.css";


const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div className="testimonial py-4 px-3">
        <p className="section__description">
        Finding my perfect home seemed like an impossible task until I stumbled upon this rental service. From the moment I landed on their website, I was blown away by the variety and quality of listings available. With their user-friendly interface and responsive customer service, I was able to navigate the rental process with ease. Thanks to them, I now wake up every morning in my dream home, and I couldn't be happier!
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src="https://cdn.i-scmp.com/sites/default/files/d8/images/canvas/2023/10/17/4c6cc112-dab2-4c22-aa96-5003eb7fb8e8_0047e3ae.jpg" alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Lee Yoo-mi</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
        I've rented many homes over the years, but none have compared to the experience I had with this rental service. Not only were the listings top-notch, but the level of service provided was exceptional. From the initial inquiry to signing the lease, the team went above and beyond to ensure that I found the perfect home for my needs. I highly recommend this service to anyone in search of quality rentals and outstanding customer care.
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src="https://www.musicmundial.com/en/wp-content/uploads/2023/09/These-are-the-3-best-actors-in-Korean-Netflix-series-you-can-watch-right-now.jpg" alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Cha euwoo</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
        My search for a new home was filled with uncertainty until I discovered this rental service. Their website made it easy to narrow down my options and find properties that matched my criteria. What truly impressed me, however, was the seamless rental process. From scheduling viewings to submitting applications, everything was handled efficiently and professionally. Thanks to them, I'm now settled into a beautiful home that exceeds all my expectations.
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src="https://akns-images.eonline.com/eol_images/Entire_Site/2023229/rs_1200x1200-230329093925-1200-Yara-Shahidi-LT-032923.jpg?fit=around%7C660:372&output-quality=90&crop=660:372;center,top" alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Yara Shahidi</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
        As a first-time renter, I was nervous about navigating the rental market on my own. Thankfully, I found this rental service, and they made the entire process a breeze. Their extensive listings gave me plenty of options to choose from, and their knowledgeable staff guided me through every step of the process. Thanks to their expertise and support, I found the perfect home for me, and I couldn't be more grateful. With them, I had peace of mind throughout the entire journey.
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src="https://m.media-amazon.com/images/M/MV5BYjBmMDBiOGQtYzBlNi00MzU5LWJjNTUtOTNhMzU1ZDE1NGQzXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Kira Kosarin</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Testimonial;
