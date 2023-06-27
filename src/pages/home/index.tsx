import ButtonLink from "../../components/buttonLink";
import { CustomSlider } from "../../components/slider";
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
        <h3 className="homePage__specialize-title">
          We specialize in creating unique and vibrant video tours that allow
          realtors and homeowners
        </h3>
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
      <section className="homePage__slider">
        <div className="homePage__slider-control">
          <h3>Latest Videos</h3>
          <div className="homePage__slider-control__button">
            <p>Welcome to Captivating Ssale in Poland</p>
            <ButtonLink
              title="All Porfolio"
              link="/portfolio"
              className="btn-outwhite"
            />
          </div>
        </div>
        <CustomSlider />
      </section>
      <section className="homePage__contacts">
        <div className="homePage__contacts-title">
          <h3>Contacts</h3>
          <p>Contact us in any way that works for you</p>
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
              Example123@gmail.com
            </div>
          </div>
          <div className="homePage__contacts-info__item">
            <hr className="base-line" />
            <div className="homePage__contacts-info__item-title">FaceBook</div>
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
