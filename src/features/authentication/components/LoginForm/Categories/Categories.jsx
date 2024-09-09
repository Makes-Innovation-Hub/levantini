import "./Categories.css";

const SportCard = () => {
  return (
    <div className="sport-card">
      <img
        src="https://cdn.pixabay.com/photo/2014/10/14/20/24/football-488714_960_720.jpg"
        alt="Sport"
        className="sport-image"
      />
      <div className="sport-overlay">
        <p>Sport</p>
      </div>
    </div>
  );
};

export default SportCard;
