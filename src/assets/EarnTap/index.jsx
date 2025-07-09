import "./style.css";
import coin from "../img/coin.png";

function EarnTap({ level, bonus, buy }) {
  return (
    <>
      <div className="levelTap">
        <div className="level">
          <p>lvl{level}</p>
        </div>
        <div className="price">
          <p>+{bonus}</p>
          <img src={coin} alt="" />
        </div>
        <div className="spend">
          <p>-{buy}</p>
          <img src={coin} alt="" />
        </div>
      </div>
    </>
  );
}

export default EarnTap;
