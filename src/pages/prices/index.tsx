import { useRef, useState } from "react";
import ButtonBack from "../../components/buttonBack";
import ButtonLink from "../../components/buttonLink";
import emailjs from "@emailjs/browser";
import "./styles.scss";

export const PricesPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const form = useRef(null);

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
      <ButtonBack title="Main page" />
      <h2 className="prices__title">Price List</h2>
      <div className="prices__list">
        <div className="prices__list-item">
          <div>
            <p>Package 1</p>
            <h3>Real Estate Photography</h3>
            <li>10-15 professionally edited photographs</li>
            <li>Turnaround time: 1-3 days</li>
          </div>
          <div>
            <p>Price</p>
            <h3>400 PLN</h3>
            <div className="prices__list-item__btn">
              <ButtonLink title="Сhoose a package " link="/" />
            </div>
          </div>
        </div>
        <div className="prices__list-item">
          <div>
            <p>Package 2</p>
            <h3>Real Estate Videography</h3>
            <li>1-2 minute video tour of the property</li>
            <li>Turnaround time: 2-4 days</li>
            <li>Vertical social media video (reels-like)</li>
          </div>
          <div>
            <p>Price</p>
            <h3>600 PLN</h3>
            <div className="prices__list-item__btn">
              <ButtonLink title="Сhoose a package " link="/" />
            </div>
          </div>
        </div>
        <div className="prices__list-item">
          <div>
            <p>Package 3</p>
            <h3>10-15 professionally edited photographs</h3>
            <li>1-2 minute video tour of the property</li>
            <li>Vertical video (10-30 seconds)</li>
            <li>Turnaround time: 1-3 days</li>
          </div>
          <div>
            <p>Price</p>
            <h3>800 PLN</h3>
            <div className="prices__list-item__btn">
              <ButtonLink title="Сhoose a package " link="/" />
            </div>
          </div>
        </div>
      </div>
      <div className="prices__aero">
        <h3>Aerial Photography and Videography (Coming Soon)</h3>
        <p>Aerial photos and videos of the property. +300 PLN to any package</p>
      </div>
      <div className="prices__offers">
        <h3>Special Offers for Agencies</h3>
        <p>
          Contact us to discuss special pricing and customized packages designed
          specifically for your agency's requirements. Fill out the contact form
          below, and our team will get back to you promptly to provide further
          assistance.
        </p>
        <form className="prices__offers-form" ref={form} onSubmit={sendEmail}>
          <label>Your Name</label>
          <input
            required
            type="text"
            name="user_name"
            className="prices__offers-form__email"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label>Email or phone number</label>
          <input
            required
            type="text"
            name="user_email"
            className="prices__offers-form__email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Contact form</label>
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
            Send
          </button>
        </form>
      </div>
    </div>
  );
};
