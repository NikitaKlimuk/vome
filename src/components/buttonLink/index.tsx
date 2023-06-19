import "./styles.scss";

interface IButtonLink {
  title: string;
  link: string;
}

const ButtonLink: React.FC<IButtonLink> = ({ title, link }) => {
  return (
    <a href={link} target="_blank" className="btn-outline" rel="noreferrer">
      {title}
    </a>
  );
};

export default ButtonLink;
