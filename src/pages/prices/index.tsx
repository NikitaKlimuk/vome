import { useRef, useState } from "react";
import ButtonBack from "../../components/buttonBack";
import ButtonLink from "../../components/buttonLink";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";
import "./styles.scss";

export const PricesPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const form = useRef(null);
  const { t } = useTranslation();

  const serviceId = process.env.REACT_APP_SERVICE_ID as string;
  const templateId = process.env.REACT_APP_TEMPLATE_ID as string;
  const publicKey = process.env.REACT_APP_PUBLIC_KEY as string;

  const sendEmail = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (form.current) {
      emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
        (result: { text: any }) => {
          setName("");
          setEmail("");
          setMessage("");
          // console.log(result.text);
        },
        (error: { text: any }) => {
          // console.log(error.text);
        }
      );
    }
  };

  return (
    <div className="container prices">
      <ButtonBack title={t("buttons.home")} />
      <h2 className="prices__title">{t("prices.title")}</h2>
      <div className="prices__list">
        <div className="prices__list-item">
          <div>
            <p>{t("prices.package")} 1</p>
            <h3>{t("prices.photos.title")}</h3>
            <li>{t("prices.photos.content")}</li>
            <li>{t("prices.photos.time")}</li>
          </div>
          <div>
            <p>{t("prices.price")}</p>
            <h3>400 PLN</h3>
            <div className="prices__list-item__btn">
              <ButtonLink title={t("buttons.package")} link="/" />
            </div>
          </div>
        </div>
        <div className="prices__list-item">
          <div>
            <p>{t("prices.package")} 2</p>
            <h3>{t("prices.videos.title")}</h3>
            <li>{t("prices.videos.content")}</li>
            <li>{t("prices.videos.time")}</li>
            <li>{t("prices.videos.dop")}</li>
          </div>
          <div>
            <p>{t("prices.price")}</p>
            <h3>600 PLN</h3>
            <div className="prices__list-item__btn">
              <ButtonLink title={t("buttons.package")} link="/" />
            </div>
          </div>
        </div>
        <div className="prices__list-item">
          <div>
            <p>{t("prices.package")} 3</p>
            <h3>{t("prices.full.title")}</h3>
            <li>{t("prices.full.photo")}</li>
            <li>{t("prices.full.video")}</li>
            <li>{t("prices.full.dop")}</li>
            <li>{t("prices.full.time")}</li>
          </div>
          <div>
            <p>{t("prices.price")}</p>
            <h3>800 PLN</h3>
            <div className="prices__list-item__btn">
              <ButtonLink title={t("buttons.package")} link="/" />
            </div>
          </div>
        </div>
      </div>
      <div className="prices__aero">
        <h3>{t("prices.aero.title")}</h3>
        <p>{t("prices.aero.descr")}</p>
      </div>
      <div className="prices__offers">
        <h3>{t("prices.offers.title")}</h3>
        <p>{t("prices.offers.descr")}</p>
        <form className="prices__offers-form" ref={form} onSubmit={sendEmail}>
          <label>{t("prices.offers.name")}</label>
          <input
            required
            type="text"
            name="user_name"
            className="prices__offers-form__email"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label>{t("prices.offers.email")}</label>
          <input
            required
            type="text"
            name="user_email"
            className="prices__offers-form__email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>{t("prices.offers.textarea")}</label>
          <textarea
            name="message"
            className="prices__offers-form__textarea"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            className="prices__offers-form__btn"
            type="submit"
            onClick={sendEmail}
          >
            {t("prices.offers.send")}
          </button>
        </form>
      </div>
    </div>
  );
};
