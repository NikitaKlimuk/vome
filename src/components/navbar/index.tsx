import { LangToggler } from "../langToggler";
import "./styles.scss";

interface IProps {}

export const Navbar: React.FC<IProps> = () => {
  return (
    <section className="navbar">
      <div className="navbar__items">
        <div>Portfolio</div>
        <div>Services</div>
        <div>About</div>
      </div>
      <div className="navbar__language">
        <LangToggler />
      </div>
    </section>
  );
};
