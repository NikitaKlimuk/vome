import { useTranslation } from "react-i18next";
import ButtonBack from "../../components/buttonBack";
import mikitaImg from "../../assets/img/about/mikita.jpg";
import editingImg from "../../assets/img/about/editing.jpg";
import "./styles.scss";

export const AboutPage = () => {
  const { t } = useTranslation();

  return (
    <div className="container about">
      <ButtonBack title={t("buttons.home")} />
      <h2 className="about-title">{t("about.title")}</h2>
      <div className="about__section">
        <div className="about__section-text">
          <h3>{t("about.hi")}</h3>
          <p>{t("about.mikita")}</p>
          <p>{t("about.experience")}</p>
        </div>
        <div className="about__section-img">
          <img src={mikitaImg} alt="Mikita Klimuk" />
        </div>
      </div>
      <div className="about__section">
        <div className="about__section-text">
          <p>{t("about.editing")}</p>
        </div>
        <div className="about__section-img">
          <img src={editingImg} alt="editing setup" />
        </div>
      </div>
      <div className="about__offers">
        <h3 className="about__offers-title">{t("about.offers.title")}</h3>
        <div className="about__offers-list">
          <div className="about__offers-list__item">
            <div>1</div>
            <p>{t("about.offers.pricing")}</p>
          </div>
          <div className="about__offers-list__item">
            <div>2</div>
            <p>{t("about.offers.prof")}</p>
          </div>
          <div className="about__offers-list__item">
            <div>3</div>
            <p>{t("about.offers.time")}</p>
          </div>
          <div className="about__offers-list__item">
            <div>4</div>
            <p>{t("about.offers.equipment")}</p>
          </div>
          <div className="about__offers-list__item">
            <div>5</div>
            <p>{t("about.offers.reletionship")}</p>
          </div>
          <div className="about__offers-list__item">
            <div>6</div>
            <p>{t("about.offers.creative")}</p>
          </div>
        </div>
        <h3 className="about__offers-thanks">{t("about.offers.thanks")}</h3>
      </div>
    </div>
  );
};
