import s_logo from "../../../public/images/s_logo.svg";
import points_img from "../../../public/images/points_img.svg";
import "./Points.css";

const Points = () => {
  let number = 501;
  return (
    <div className="points-container">
      <img src={s_logo} alt="Logo" />

      <div className="points-img-container">
        <img src={points_img} alt="points_img" />
        <span className="points">{number}</span>
      </div>
    </div>
  );
};

export default Points;
