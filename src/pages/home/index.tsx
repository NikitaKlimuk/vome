import ButtonLink from "../../components/buttonLink";
import { CustomSlider } from "../../components/slider";
import "./styles.scss";

export const HomePage = () => {
  return (
    <div className="homePage">
      <section className="homePage__hero">
        <div className="homePage__hero-header">
          <h1 className="homePage__hero-header__title">Vome</h1>
          <div className="homePage__hero-header__descr">
            Where Every Property Tells a Story
          </div>
        </div>
        <div className="homePage__hero-bottom">
          <p className="homePage__hero-bottom__info">
            Welcome to Vome - your partner for real estate photography and
            videography services in Poland. We specialize in creating
            high-quality and captivating visuals that will help you sell or rent
            properties quickly and effectively.
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
          We offer a full range of real estate photography and videography
          services.
        </h3>
        <div className="homePage__specialize-offers">
          <div className="homePage__specialize-offers__item">
            <hr className="base-line" />
            <div className="homePage__specialize-offers__item-title">
              Professional Quality
            </div>
            <div className="homePage__specialize-offers__item-descr">
              We strive for excellence and deliver high-quality photos and
              videos that capture the ambiance and attractiveness of each
              property.
            </div>
          </div>
          <div className="homePage__specialize-offers__item">
            <hr className="base-line" />
            <div className="homePage__specialize-offers__item-title">
              Creativity
            </div>
            <div className="homePage__specialize-offers__item-descr">
              We have an eye for the uniqueness of every home and find creative
              ways to accentuate its advantages.
            </div>
          </div>
          <div className="homePage__specialize-offers__item">
            <hr className="base-line" />
            <div className="homePage__specialize-offers__item-title">
              Efficiency
            </div>
            <div className="homePage__specialize-offers__item-descr">
              Our team works quickly and professionally to ensure your
              properties are ready for showcasing in the shortest possible time.
            </div>
          </div>
          <div className="homePage__specialize-offers__item">
            <hr className="base-line" />
            <div className="homePage__specialize-offers__item-title">
              Personalization
            </div>
            <div className="homePage__specialize-offers__item-descr">
              We take into account your individual needs and aim to provide you
              with a solution that reflects the uniqueness of each property.
            </div>
          </div>
        </div>
      </section>
      <section className="homePage__slider">
        <div className="homePage__slider-control">
          <h3>Portfolio</h3>
          <div className="homePage__slider-control__button">
            <p>Discover the Beauty of Properties</p>
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
