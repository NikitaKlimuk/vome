import "./styles.scss";

interface IProps {}

export const Footer: React.FC<IProps> = () => {
  return (
    <section className="footer">
      <div className="footer__title">
        <h2>Vome</h2>
        <h3>Real estate videos</h3>
        <p>
          Welcome to Captivating Spaces - a professional portfolio of a property
          photography and videography operator
        </p>
      </div>
      <div className="footer__links">
        <div className="footer__links-menu">
          <ul aria-label="Site sections">
            <li>Our Results</li>
            <li>Partners</li>
            <li>Rates</li>
            <li>Reviews</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="footer__links-info">
          <div>Legal information</div>
        </div>
      </div>
    </section>
  );
};
