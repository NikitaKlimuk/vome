import ButtonBack from "../../components/buttonBack";
import ButtonLink from "../../components/buttonLink";
import videoPrew from "../../assets/img/portfolio/image 12.jpg";
import { portfolioCards } from "../../config/portfolioCards";
import { useTranslation } from "react-i18next";
import "./styles.scss";

export const PortfolioPage = () => {
  const { t } = useTranslation();

  return (
    <section className="container portfolio">
      <div className="portfolio__video">
        <ButtonBack title={t("buttons.home")} />
        <h2 className="portfolio__video-title">{t("portfolio.video.title")}</h2>
        <h3 className="portfolio__video-descr">{t("portfolio.video.descr")}</h3>
        <img className="portfolio__video-reels" src={videoPrew} alt="test" />
      </div>
      <div className="portfolio__photo">
        <h2 className="portfolio__photo-title">
          {t("portfolio.photos.title")}
        </h2>
        <p className="portfolio__photo-descr">{t("portfolio.photos.descr")}</p>
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
        <h3 className="portfolio__price-title">
          {t("portfolio.prices.title")}
        </h3>
        <p className="portfolio__price-descr">{t("portfolio.prices.descr")}</p>
        <div className="portfolio__price-btn">
          <ButtonLink title={t("buttons.prices")} link="/prices" rightArrow />
        </div>
      </div>
    </section>
  );
};
