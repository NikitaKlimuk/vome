import { useNavigate } from "react-router-dom";
import arrowLeft from "../../assets/icons/arrow-left.svg";
import "./styles.scss";

interface IButtonBack {
  title: string;
}

const ButtonBack: React.FC<IButtonBack> = ({ title }) => {
  const navigate = useNavigate();

  return (
    <button className="btn-back" onClick={() => navigate("/")}>
      <img src={arrowLeft} alt="left arrow" />
      <div className="btn-back__title">{title}</div>
    </button>
  );
};

export default ButtonBack;
