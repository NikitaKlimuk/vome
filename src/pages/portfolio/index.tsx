import ButtonBack from "../../components/buttonBack";
import ButtonLink from "../../components/buttonLink";
import videoPrew from "../../assets/img/portfolio/image 12.jpg";
import { portfolioCards } from "../../config/portfolioCards";
import "./styles.scss";

export const PortfolioPage = () => {
  return (
    <section className="container portfolio">
      <div className="portfolio__video">
        <ButtonBack title="Main page" />
        <h2 className="portfolio__video-title">Welcome to our Portfolio</h2>
        <h3 className="portfolio__video-descr">
          Thank you for visiting our portfolio page at Vome. While we continue
          to build our collection of real estate photography and videography
          projects, we are excited to share with you the work we have
          accomplished so far. Each project we undertake is approached with
          exceptional results.
        </h3>
        <img className="portfolio__video-reels" src={videoPrew} alt="test" />
      </div>
      <div className="portfolio__photo">
        <h2 className="portfolio__photo-title">Photos</h2>
        <p className="portfolio__photo-descr">
          work we have accomplished so far. Each project we undertake is
          approached
        </p>
        <div className="portfolio__photo-tabs">
          {portfolioCards.map((item, i) => {
            return (
              <img
                key={i}
                className="portfolio__photo-tabs__item"
                src={item}
                alt="card item"
              />
            );
          })}
        </div>
      </div>
      <div className="portfolio__price">
        <h3 className="portfolio__price-title">See the price</h3>
        <p className="portfolio__price-descr">
          work we have accomplished so far. Each project we undertake is
          approached work we have accomplished so far. Each project we undertake
          is approached
        </p>
        <div className="portfolio__price-btn">
          <ButtonLink title={"Prices"} link={"/prices"} rightArrow />
        </div>
      </div>
    </section>
  );
};
