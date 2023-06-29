import { useTranslation } from "react-i18next";
import "./styles.scss";

interface IProps {}

export const Footer: React.FC<IProps> = () => {
  const { t } = useTranslation();

  return (
    <section className="footer">
      <div className="footer__title">
        <a href="/">Vome</a>
        <h3>{t("footer.title")}</h3>
        <p>{t("footer.descr")}</p>
      </div>
      <div className="footer__links">
        <div className="footer__links-menu">
          <ul aria-label={`${t("footer.sections")}`}>
            <li>
              <a href="/portfolio">{t("navbar.portfolio")}</a>
            </li>
            <li>
              <a href="/prices">{t("navbar.prices")}</a>
            </li>
            <li>
              <a href="/about">{t("navbar.about")}</a>
            </li>
          </ul>
        </div>
        <div className="footer__links-info">
          <div>{t("footer.info")}</div>
        </div>
      </div>
    </section>
  );
};
