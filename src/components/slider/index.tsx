import Slider from "react-slick";
import slider1 from "../../assets/img/slider/slider1.jpg";
import slider2 from "../../assets/img/slider/slider2.jpg";
import "./styles.scss";

export const CustomSlider: React.FC = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };
  return (
    <div className="slider">
      <Slider {...settings}>
        <div className="slider__item">
          <a href="/">
            <img src={slider1} alt="alt for img" />
            <h3>Title for video</h3>
          </a>
        </div>
        <div className="slider__item">
          <a href="/">
            <img src={slider2} alt="alt for img" />
            <h3>Title for video</h3>
          </a>
        </div>
        <div className="slider__item">
          <a href="/">
            <img src={slider1} alt="alt for img" />
            <h3>Title for video</h3>
          </a>
        </div>
        <div className="slider__item">
          <a href="/">
            <img src={slider2} alt="alt for img" />
            <h3>Title for video</h3>
          </a>
        </div>
        <div className="slider__item">
          <a href="/">
            <img src={slider1} alt="alt for img" />
            <h3>Title for video</h3>
          </a>
        </div>
        <div className="slider__item">
          <a href="/">
            <img src={slider2} alt="alt for img" />
            <h3>Title for video</h3>
          </a>
        </div>
      </Slider>
    </div>
  );
};
