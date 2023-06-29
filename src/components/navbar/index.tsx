import { useTranslation } from "react-i18next";
import { LangToggler } from "../langToggler";
import "./styles.scss";

interface IProps {}

export const Navbar: React.FC<IProps> = () => {
  const { t } = useTranslation();

  return (
    <section className="navbar">
      <div className="navbar__items">
        <div>{t("navbar.portfolio")}</div>
        <div>{t("navbar.prices")}</div>
        <div>{t("navbar.about")}</div>
      </div>
      <div className="navbar__language">
        <LangToggler />
      </div>
    </section>
  );
};
