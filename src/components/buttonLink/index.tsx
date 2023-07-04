import { useNavigate } from "react-router-dom";
import arrowRight from "../../assets/icons/arrow-right.svg";
import "./styles.scss";

interface IButtonLink {
  title: string;
  link: string;
  className?: string;
  rightArrow?: boolean;
}

const ButtonLink: React.FC<IButtonLink> = ({
  title,
  link,
  className,
  rightArrow,
}) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(link)}
      className={className ? className : "btn-outline"}
      rel="noreferrer"
    >
      {title}
      {rightArrow ? <img src={arrowRight} alt="arrow icon" /> : null}
    </button>
  );
};

export default ButtonLink;
