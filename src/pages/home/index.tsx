import ButtonLink from "../../components/buttonLink";
import "./styles.scss";

export const HomePage = () => {
  return (
    <div className="homePage">
      <section className="homePage__hero">
        <div className="homePage__hero-header">
          <div className="homePage__hero-header__title">Vome</div>
          <div className="homePage__hero-header__descr">
            Capturing apartments for sale in Poland.
          </div>
        </div>
        <div className="homePage__hero-bottom">
          <p className="homePage__hero-bottom__info">
            Welcome to Captivating Spaces - a professional portfolio of a
            property photography and videography operator specializing in
            capturing apartments for sale in Poland.
          </p>
          <div className="homePage__hero-bottom__buttons">
            <ButtonLink title="Porfolio" link="/portfolio" />
            <ButtonLink title="Price" link="/price" />
          </div>
        </div>
      </section>
      <hr className="main-line" />
      <section className="homePage__specialize">
        <div className="homePage__specialize-title">
          We specialize in creating unique and vibrant video tours that allow
          realtors and homeowners
        </div>
        <div className="homePage__specialize-offers">
          <div className="homePage__specialize-offers__item">
            <hr className="base-line" />
            <div className="homePage__specialize-offers__item-title">
              Wat We Do
            </div>
            <div className="homePage__specialize-offers__item-descr">
              Welcome to Captivating Spaces - a professional portfolio of a
              property photography and videography operator
            </div>
          </div>
          <div className="homePage__specialize-offers__item">
            <hr className="base-line" />
            <div className="homePage__specialize-offers__item-title">
              Fast Service
            </div>
            <div className="homePage__specialize-offers__item-descr">
              Welcome to Captivating Spaces - a professional portfolio of a
              property photography and videography operator
            </div>
          </div>
          <div className="homePage__specialize-offers__item">
            <hr className="base-line" />
            <div className="homePage__specialize-offers__item-title">
              You Will Got
            </div>
            <div className="homePage__specialize-offers__item-descr">
              Welcome to Captivating Spaces - a professional portfolio of a
              property photography and videography operator
            </div>
          </div>
          <div className="homePage__specialize-offers__item">
            <hr className="base-line" />
            <div className="homePage__specialize-offers__item-title">
              Fast Service
            </div>
            <div className="homePage__specialize-offers__item-descr">
              Welcome to Captivating Spaces - a professional portfolio of a
              property photography and videography operator specializing in
              capturing apartments for sale in Poland.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
