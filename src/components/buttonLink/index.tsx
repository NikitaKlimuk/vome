import { useNavigate } from "react-router-dom";
import arrowRight from "../../assets/icons/arrow-right.svg";
import { useEffect } from "react";
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

  const handleClick = () => {
    navigate(link);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <button
      onClick={handleClick}
      className={className ? className : "btn-outline"}
      rel="noreferrer"
    >
      {title}
      {rightArrow ? <img src={arrowRight} alt="arrow icon" /> : null}
    </button>
  );
};

export default ButtonLink;
