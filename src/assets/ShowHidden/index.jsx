import "./style.css";
import coin from "../img/coin.png";

function ShowHidden({ iconShw, nameShw, perText, perText2 }) {
  return (
    <div className="card">
      <div className="card-top">
        <img src={iconShw} alt="Icon" className="card-icon" />
        <div className="card-info">
          <p className="card-title">{nameShw}</p>
          <p className="card-profit">
            <img src={coin} alt="coin" className="coin-img" /> {perText}
          </p>
        </div>
      </div>
      <div className="card-bottom">
        <span className="card-level">lvl 1</span>
        <span className="card-balance">
          <img src={coin} alt="coin" className="coin-img" /> {perText2}
        </span>
      </div>
    </div>
  );
}

export default ShowHidden;
