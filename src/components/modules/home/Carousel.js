import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const settings = {
    arrows: false,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const style = "h-96 lg:h-screen w-screen object-cover";

  return (
    <div>
      <Slider {...settings}>
        <div>
          <img
            src="https://p4.wallpaperbetter.com/wallpaper/905/749/293/hands-wedding-rings-bouquet-roses-hd-wallpaper-77841-wallpaper-preview.jpg"
            alt="carousel"
            className={style}
          />
        </div>
        <div>
          <img
            src="https://cdn.kibrispdr.org/data/wedding-hd-0.jpg"
            alt="carousel"
            className={style}
          />
        </div>
        <div>
          <img
            src="https://senjamanagement.com/data1/images/5.jpg"
            alt="carousel"
            className={style}
          />
        </div>
        <div>
          <img
            src="https://senjamanagement.com/assets/images/rizky.jpeg"
            alt="carousel"
            className={style}
          />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
