import "./styles.scss";

interface IButtonLink {
  title: string;
  link: string;
  className?: string;
}

const ButtonLink: React.FC<IButtonLink> = ({ title, link, className }) => {
  return (
    <a
      href={link}
      target="_blank"
      className={className ? className : "btn-outline"}
      rel="noreferrer"
    >
      {title}
    </a>
  );
};

export default ButtonLink;
