import { useTranslation } from "react-i18next";
import { CustomSlider } from "../../components/slider";
import ButtonLink from "../../components/buttonLink";
import "./styles.scss";

export const HomePage = () => {
  const { t } = useTranslation();

  return (
    <div className="homePage">
      <section className="homePage__hero">
        <div className="homePage__hero-header">
          <h1 className="homePage__hero-header__title">Vome</h1>
          <div className="homePage__hero-header__descr">
            <h2>{t("hero.title")}</h2>
            <p>{t("hero.descr")}</p>
          </div>
        </div>
        <div className="homePage__hero-bottom">
          <div className="homePage__hero-bottom__buttons">
            <ButtonLink title={t("navbar.portfolio")} link="/portfolio" />
            <ButtonLink title={t("navbar.prices")} link="/prices" />
          </div>
        </div>
      </section>
      <section className="homePage__specialize">
        <h3 className="homePage__specialize-title">{t("offers.title")}</h3>
        <div className="homePage__specialize-offers">
          <div className="homePage__specialize-offers__item">
            <hr className="base-line" />
            <div className="homePage__specialize-offers__item-title">
              {t("offers.quality.title")}
            </div>
            <div className="homePage__specialize-offers__item-descr">
              {t("offers.quality.descr")}
            </div>
          </div>
          <div className="homePage__specialize-offers__item">
            <hr className="base-line" />
            <div className="homePage__specialize-offers__item-title">
              {t("offers.creativity.title")}
            </div>
            <div className="homePage__specialize-offers__item-descr">
              {t("offers.creativity.descr")}
            </div>
          </div>
          <div className="homePage__specialize-offers__item">
            <hr className="base-line" />
            <div className="homePage__specialize-offers__item-title">
              {t("offers.efficiency.title")}
            </div>
            <div className="homePage__specialize-offers__item-descr">
              {t("offers.efficiency.descr")}
            </div>
          </div>
          <div className="homePage__specialize-offers__item">
            <hr className="base-line" />
            <div className="homePage__specialize-offers__item-title">
              {t("offers.personalization.title")}
            </div>
            <div className="homePage__specialize-offers__item-descr">
              {t("offers.personalization.descr")}
            </div>
          </div>
        </div>
      </section>
      <section className="homePage__slider">
        <div className="homePage__slider-control">
          <h3>{t("slider.title")}</h3>
          <div className="homePage__slider-control__button">
            <p>{t("slider.descr")}</p>
            <ButtonLink
              title={t("slider.button")}
              link="/portfolio"
              className="btn-outwhite"
            />
          </div>
        </div>
        <CustomSlider />
      </section>
      <section className="homePage__contacts">
        <div className="homePage__contacts-title">
          <h3>{t("contacts.title")}</h3>
          <p>{t("contacts.descr")}</p>
        </div>
        <div className="homePage__contacts-info">
          <div className="homePage__contacts-info__item">
            <hr className="base-line" />
            <div className="homePage__contacts-info__item-title">Phone</div>
            <div className="homePage__contacts-info__item-descr">
              +48514060233
            </div>
          </div>
          <div className="homePage__contacts-info__item">
            <hr className="base-line" />
            <div className="homePage__contacts-info__item-title">Email</div>
            <div className="homePage__contacts-info__item-descr">
              VomePoland@gmail.com
            </div>
          </div>
          <div className="homePage__contacts-info__item">
            <hr className="base-line" />
            <div className="homePage__contacts-info__item-title">Instagram</div>
            <div className="homePage__contacts-info__item-descr">@Vome</div>
          </div>
          <div className="homePage__contacts-info__item">
            <hr className="base-line" />
            <div className="homePage__contacts-info__item-title">Telegram</div>
            <div className="homePage__contacts-info__item-descr">@Vome</div>
          </div>
        </div>
      </section>
    </div>
  );
};
