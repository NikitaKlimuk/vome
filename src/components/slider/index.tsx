import Slider from "react-slick";
import slider1 from "../../assets/img/slider/slider1.jpg";
import slider2 from "../../assets/img/slider/slider2.jpg";
import slider3 from "../../assets/img/slider/slider3.jpg";
import slider4 from "../../assets/img/slider/slider4.jpg";
import slider5 from "../../assets/img/slider/slider5.jpg";
import slider6 from "../../assets/img/slider/slider6.jpg";
import "./styles.scss";

export const CustomSlider: React.FC = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider">
      <Slider {...settings}>
        <div className="slider__item">
          <img src={slider1} alt="alt for img" />
        </div>
        <div className="slider__item">
          <img src={slider5} alt="alt for img" />
        </div>
        <div className="slider__item">
          <img src={slider3} alt="alt for img" />
        </div>
        <div className="slider__item">
          <img src={slider6} alt="alt for img" />
        </div>
        <div className="slider__item">
          <img src={slider2} alt="alt for img" />
        </div>
        <div className="slider__item">
          <img src={slider4} alt="alt for img" />
        </div>
      </Slider>
    </div>
  );
};
