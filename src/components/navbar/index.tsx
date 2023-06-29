import { useTranslation } from "react-i18next";
import { LangToggler } from "../langToggler";
import "./styles.scss";

interface IProps {}

export const Navbar: React.FC<IProps> = () => {
  const { t } = useTranslation();

  return (
    <section className="navbar">
      <div className="navbar__items">
        <a href="/portfolio">{t("navbar.portfolio")}</a>
        <a href="/prices">{t("navbar.prices")}</a>
        <a href="/about">{t("navbar.about")}</a>
      </div>
      <div className="navbar__language">
        <LangToggler />
      </div>
    </section>
  );
};
