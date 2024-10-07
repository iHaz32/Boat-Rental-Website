import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageCarousel = ({ boat }) => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    fade: true,
    adaptiveHeight: true,
    cssEase: "linear",
  };

  const images = [boat.image, boat.image, boat.image, boat.image, boat.image];

  return (
    <div className="relative w-full mx-auto rounded-xl overflow-hidden p-2">
      {/* Background Image with Blur */}
      <div className="absolute inset-0 z-0">
        <img
          src={boat.image}
          alt="Background"
          className="w-full h-full object-cover filter blur-lg"
        />
      </div>

      {/* Overlay */}
      <div className="relative p-4 bg-black bg-opacity-30 rounded-xl">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div
              key={index}
              className="relative flex items-center justify-center h-96"
            >
              <img
                src={image}
                alt={`Boat ${index + 1}`}
                className="max-h-full max-w-full h-full w-full rounded-lg shadow-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-1">
                <p className="text-lg">{`Image ${index + 1}`}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ImageCarousel;
