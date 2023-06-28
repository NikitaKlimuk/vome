import "./styles.scss";

interface IProps {}

export const Footer: React.FC<IProps> = () => {
  return (
    <section className="footer">
      <div className="footer__title">
        <h2>Vome</h2>
        <h3>Where Every Property Tells a Story</h3>
        <p>
          Welcome to Vome - your partner for real estate photography and
          videography services in Poland
        </p>
      </div>
      <div className="footer__links">
        <div className="footer__links-menu">
          <ul aria-label="Site sections">
            <li>Portfolio</li>
            <li>Prices</li>
            <li>About</li>
          </ul>
        </div>
        <div className="footer__links-info">
          <div>Legal information</div>
        </div>
      </div>
    </section>
  );
};
